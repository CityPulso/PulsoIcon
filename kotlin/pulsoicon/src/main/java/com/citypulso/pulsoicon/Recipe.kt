package com.citypulso.pulsoicon

import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.Easing

/** Animatable values of a shape (or of the whole icon), with their resting value. */
enum class Prop(val rest: Float) {
    PathLength(1f),
    PathOffset(0f),
    Opacity(1f),
    X(0f),
    Y(0f),
    Rotate(0f),
    Scale(1f),
    ScaleX(1f),
    ScaleY(1f),
    SkewY(0f),
}

/** A CSS cubic-bezier timing curve (motion's `easeInOut` / `easeOut` are the standard ones). */
class Curve(val x1: Float, val y1: Float, val x2: Float, val y2: Float) {
    internal val easing: Easing = CubicBezierEasing(x1, y1, x2, y2)

    companion object {
        val EaseInOut = Curve(0.42f, 0f, 0.58f, 1f)
        val EaseOut = Curve(0f, 0f, 0.58f, 1f)
    }
}

/**
 * Keyframes of one value: [values] spread over [duration] seconds after [delay] (evenly, or at [times]),
 * each segment eased with [curve]. Before the delay the value rests; after the end it holds the last value.
 */
class Track(
    val prop: Prop,
    val values: FloatArray,
    val delay: Float,
    val duration: Float,
    val curve: Curve = Curve.EaseInOut,
    val times: FloatArray? = null,
    /** Jump back to rest when stopped mid-play instead of easing back (spin). */
    val snapBack: Boolean = false,
) {
    fun valueAt(t: Float): Float {
        if (t < delay) return prop.rest
        val progress = ((t - delay) / duration).coerceIn(0f, 1f)
        val stops = times ?: FloatArray(values.size) { it / (values.size - 1f) }
        var i = 1
        while (i < stops.size - 1 && progress > stops[i]) i++
        val span = stops[i] - stops[i - 1]
        val local = if (span <= 0f) 1f else ((progress - stops[i - 1]) / span).coerceIn(0f, 1f)
        return values[i - 1] + (values[i] - values[i - 1]) * curve.easing.transform(local)
    }
}

/** Seconds the parts take to settle back when an animation is stopped mid-play (easeOut, like the React package). */
const val RELEASE_SECONDS = 0.25f

private fun or(value: Float, fallback: Float) = if (value != 0f) value else fallback

private val Overshoot = Curve(0.34f, 1.56f, 0.64f, 1f)
private val SoftOut = Curve(0.22f, 1f, 0.36f, 1f)

/**
 * Motion vocabulary, ported 1:1 from pulsoicon-core `recipes.ts` (same keyframes, durations, easings; checked against
 * it by the unit tests). Translations are viewBox units, angles degrees, delays seconds.
 */
enum class Recipe(val key: String) {
    Draw("draw"), Redraw("redraw"), Pop("pop"), Press("press"), Spin("spin"), Turn("turn"), Ring("ring"), Beat("beat"),
    Pulse("pulse"), Slide("slide"), Shoot("shoot"), Bounce("bounce"), Shake("shake"), Tilt("tilt"), Swing("swing"),
    Lift("lift"), Blink("blink"), Flip("flip"), Open("open"), Fold("fold"), Fade("fade"), Twinkle("twinkle"),
    Float("float"), Grow("grow"), Drop("drop"), Rise("rise"), Stamp("stamp"), Jelly("jelly"), Roll("roll"),
    Sway("sway"), Flicker("flicker"), Wobble("wobble"), GrowX("growX"), DrawBack("drawBack"), DrawOut("drawOut");

    /** Stroke-drawing recipes have nothing to draw on a filled shape, so solid shapes pop in instead. */
    internal val solidFallback: Recipe
        get() = when (this) {
            Draw, DrawBack, DrawOut, Redraw -> Pop
            else -> this
        }

    fun tracks(d: kotlin.Float, x: kotlin.Float, y: kotlin.Float, a: kotlin.Float): List<Track> {
        fun t(prop: Prop, duration: kotlin.Float, vararg values: kotlin.Float, curve: Curve = Curve.EaseInOut, times: FloatArray? = null) =
            Track(prop, values, d, duration, curve, times)
        // The quick fade-in of a stroke that draws on.
        val fadeIn = Track(Prop.Opacity, floatArrayOf(0f, 1f), d, 0.1f)
        return when (this) {
            Draw -> listOf(t(Prop.PathLength, 0.55f, 0f, 1f), fadeIn)
            DrawBack -> listOf(t(Prop.PathLength, 0.55f, 0f, 1f), t(Prop.PathOffset, 0.55f, 1f, 0f), fadeIn)
            DrawOut -> listOf(t(Prop.PathLength, 0.55f, 0f, 1f), t(Prop.PathOffset, 0.55f, 0.5f, 0f), fadeIn)
            Redraw -> listOf(t(Prop.PathLength, 0.7f, 1f, 0f, 1f), t(Prop.PathOffset, 0.7f, 0f, 1f, 0f))
            Pop -> listOf(t(Prop.Scale, 0.45f, 0f, 1 + or(a, 0.25f), 1f), t(Prop.Opacity, 0.45f, 0f, 1f, 1f))
            Press -> listOf(t(Prop.Scale, 0.4f, 1f, 1 - or(a, 0.15f), 1.05f, 1f))
            Spin -> listOf(Track(Prop.Rotate, floatArrayOf(0f, or(a, 360f)), d, 0.8f, snapBack = true))
            Turn -> listOf(t(Prop.Rotate, 0.7f, 0f, or(a, 90f), 0f))
            Ring -> or(a, 14f).let { v -> listOf(t(Prop.Rotate, 0.7f, 0f, -v, v * 0.85f, -v * 0.55f, v * 0.3f, 0f)) }
            Beat -> or(a, 0.16f).let { v -> listOf(t(Prop.Scale, 0.65f, 1f, 1 + v, 1 - v * 0.3f, 1 + v * 0.6f, 1f)) }
            Pulse -> listOf(t(Prop.Scale, 0.6f, 1f, 1 + or(a, 0.08f), 1f))
            Slide -> or(a, 2.5f).let { v -> listOf(t(Prop.X, 0.5f, 0f, x * v, 0f), t(Prop.Y, 0.5f, 0f, y * v, 0f)) }
            Shoot -> or(a, 7f).let { v ->
                val times = floatArrayOf(0f, 0.4f, 0.41f, 1f)
                listOf(
                    t(Prop.X, 0.6f, 0f, x * v, -x * v, 0f, times = times),
                    t(Prop.Y, 0.6f, 0f, y * v, -y * v, 0f, times = times),
                    t(Prop.Opacity, 0.6f, 1f, 0f, 0f, 1f, times = times),
                )
            }
            Bounce -> or(a, 3f).let { v ->
                listOf(t(Prop.X, 0.6f, 0f, x * v, 0f, x * v * 0.4f, 0f), t(Prop.Y, 0.6f, 0f, y * v, 0f, y * v * 0.4f, 0f))
            }
            Shake -> or(a, 1.5f).let { v -> listOf(t(Prop.X, 0.5f, 0f, -v, v, -v * 0.6f, v * 0.6f, 0f)) }
            Tilt -> or(a, 12f).let { v -> listOf(t(Prop.Rotate, 0.7f, 0f, -v, v * 0.6f, -v * 0.3f, 0f)) }
            Swing -> or(a, 10f).let { v -> listOf(t(Prop.Rotate, 0.8f, 0f, v, -v * 0.75f, v * 0.4f, 0f)) }
            Lift -> listOf(
                t(Prop.X, 0.55f, 0f, x * 2.5f, 0f),
                t(Prop.Y, 0.55f, 0f, or(y, -1f) * 2.5f, 0f),
                t(Prop.Rotate, 0.55f, 0f, a, 0f),
            )
            Blink -> listOf(t(Prop.ScaleY, 0.35f, 1f, 0.1f, 1f))
            Flip -> listOf(t(Prop.ScaleX, 0.6f, 1f, -1f, 1f))
            Open -> listOf(t(Prop.ScaleX, 0.6f, 1f, 1 - or(a, 0.35f), 1f), t(Prop.SkewY, 0.6f, 0f, -or(y, 6f), 0f))
            Fold -> listOf(t(Prop.ScaleY, 0.6f, 1f, -1f, 1f))
            Fade -> listOf(t(Prop.Opacity, 0.5f, 1f, 0.15f, 1f))
            Twinkle -> or(a, 18f).let { v -> listOf(t(Prop.Rotate, 0.7f, 0f, -v, v, 0f), t(Prop.Scale, 0.7f, 1f, 0.85f, 1.1f, 1f)) }
            Float -> listOf(t(Prop.Y, 0.6f, 0f, -or(a, 1.5f), 0f))
            Grow -> listOf(t(Prop.ScaleY, 0.45f, 0f, 1f))
            GrowX -> listOf(t(Prop.ScaleX, 0.45f, 0f, 1f))
            Drop -> or(a, 6f).let { v ->
                listOf(
                    t(Prop.X, 0.45f, x * v, 0f, curve = Overshoot),
                    t(Prop.Y, 0.45f, or(y, -1f) * v, 0f, curve = Overshoot),
                    t(Prop.Opacity, 0.45f, 0f, 1f, curve = Overshoot),
                )
            }
            Rise -> listOf(t(Prop.Y, 0.5f, or(a, 3f), 0f, curve = SoftOut), t(Prop.Opacity, 0.5f, 0f, 1f, curve = SoftOut))
            Stamp -> listOf(t(Prop.Scale, 0.45f, 1 + or(a, 0.6f), 0.92f, 1f), t(Prop.Opacity, 0.45f, 0f, 1f, 1f))
            Jelly -> or(a, 0.18f).let { v ->
                listOf(
                    t(Prop.ScaleX, 0.7f, 1f, 1 + v, 1 - v * 0.6f, 1 + v * 0.3f, 1f),
                    t(Prop.ScaleY, 0.7f, 1f, 1 - v, 1 + v * 0.6f, 1 - v * 0.3f, 1f),
                )
            }
            Roll -> {
                val v = or(a, 3f)
                val dir = or(x, 1f)
                listOf(t(Prop.X, 0.8f, 0f, dir * v, 0f), t(Prop.Rotate, 0.8f, 0f, dir * 180f, 360f * dir))
            }
            Sway -> or(a, 6f).let { v -> listOf(t(Prop.Rotate, 1f, 0f, v, -v, v * 0.5f, 0f)) }
            Flicker -> listOf(t(Prop.Opacity, 0.6f, 1f, 0.3f, 1f, 0.5f, 1f, times = floatArrayOf(0f, 0.2f, 0.4f, 0.6f, 1f)))
            Wobble -> or(a, 8f).let { v -> listOf(t(Prop.Rotate, 0.6f, 0f, -v, v, 0f), t(Prop.Scale, 0.6f, 1f, 1.08f, 1.08f, 1f)) }
        }
    }
}
