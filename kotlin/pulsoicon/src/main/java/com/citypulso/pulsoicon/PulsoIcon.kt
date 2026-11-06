package com.citypulso.pulsoicon

import android.provider.Settings
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.MutatorMutex
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.size
import androidx.compose.material3.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Matrix
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.asAndroidPath
import androidx.compose.ui.graphics.asComposePath
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.drawscope.scale
import androidx.compose.ui.graphics.drawscope.withTransform
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.launch
import kotlin.math.tan

/**
 * Plays an icon from code, like the React package's ref: [startAnimation] plays its motion and [stopAnimation]
 * returns it to rest; both return when the motion has finished. Pass it to [PulsoIcon] as `handle`.
 */
@Stable
class PulsoIconHandle {
    internal var player: Player? = null

    /** Plays the icon's motion (does nothing when animations are off in the system, or when `animated` is false). */
    suspend fun startAnimation() {
        player?.start()
    }

    /** Returns to the resting frame. */
    suspend fun stopAnimation() {
        player?.stop()
    }
}

@Composable
fun rememberPulsoIconHandle(): PulsoIconHandle = remember { PulsoIconHandle() }

/** The play clock of one icon: seconds into the motion, and how far it has eased back to rest (1 = at rest). */
internal class Player(private val reducedMotion: () -> Boolean) {
    val clock = Animatable(0f)
    val release = Animatable(1f)
    var duration = 0f
    var animated = true
    private val mutex = MutatorMutex()

    suspend fun start() {
        if (!animated || reducedMotion()) return
        mutex.mutate {
            release.snapTo(0f)
            clock.snapTo(0f)
            clock.animateTo(duration, tween((duration * 1000).toInt(), easing = LinearEasing))
        }
    }

    suspend fun stop() {
        if (!animated) return
        mutex.mutate {
            clock.stop()
            release.animateTo(1f, tween((RELEASE_SECONDS * 1000).toInt(), easing = Curve.EaseOut.easing))
        }
    }

    suspend fun rest() {
        mutex.mutate {
            clock.snapTo(0f)
            release.snapTo(1f)
        }
    }
}

/**
 * Draws [icon] at rest and plays its motion, with the React package's props and defaults: a 24×24 grid,
 * [strokeWidth] in grid units (constant in pixels with [absoluteStrokeWidth]), [solid] for the filled drawing,
 * round caps and joins.
 *
 * [animated] false keeps it still. [play] true plays the motion, false returns to rest. With [autoAnimated]
 * (default), pressing, hovering or focusing the control whose [interactionSource] is passed plays it (the React
 * package plays on hover / focus of the closest interactive ancestor; leaving returns to rest). Nothing moves when
 * the system has animations turned off.
 */
@Composable
fun PulsoIcon(
    icon: PulsoIconSpec,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    size: Dp = 24.dp,
    color: Color = LocalContentColor.current,
    strokeWidth: Float = 2f,
    absoluteStrokeWidth: Boolean = false,
    solid: Boolean = false,
    animated: Boolean = true,
    autoAnimated: Boolean = true,
    play: Boolean? = null,
    handle: PulsoIconHandle? = null,
    interactionSource: InteractionSource? = null,
) {
    val context = LocalContext.current
    val player = remember(icon, solid) {
        Player { Settings.Global.getFloat(context.contentResolver, Settings.Global.ANIMATOR_DURATION_SCALE, 1f) == 0f }
    }
    player.duration = remember(icon, solid) { icon.duration(solid) }
    player.animated = animated
    val scope = rememberCoroutineScope()

    if (handle != null) {
        DisposableEffect(handle, player) {
            handle.player = player
            onDispose { if (handle.player === player) handle.player = null }
        }
    }
    LaunchedEffect(player, animated) {
        if (!animated) player.rest()
    }
    LaunchedEffect(player, animated, play) {
        if (animated && play != null) if (play) player.start() else player.stop()
    }
    if (interactionSource != null && animated && autoAnimated) {
        LaunchedEffect(interactionSource, player) {
            interactionSource.interactions.collect {
                when (it) {
                    is PressInteraction.Press, is HoverInteraction.Enter, is FocusInteraction.Focus -> scope.launch { player.start() }
                    is HoverInteraction.Exit, is FocusInteraction.Unfocus -> scope.launch { player.stop() }
                }
            }
        }
    }

    Canvas(
        modifier
            .size(size)
            .semantics {
                if (contentDescription != null) {
                    this.contentDescription = contentDescription
                    role = Role.Image
                }
            },
    ) {
        val px = this.size.minDimension
        val stroke = if (absoluteStrokeWidth) strokeWidth * 24f / (size.value * density) else strokeWidth
        val frame = Frame(player.clock.value, player.release.value)
        scale(px / 24f, px / 24f, pivot = Offset.Zero) {
            drawIcon(icon, solid, color, stroke, frame)
        }
    }
}

/** Where the animation is: play clock in seconds and how far it has eased back to rest. */
private class Frame(val time: Float, val release: Float)

/** The value of [prop] in [tracks] at [frame]: the keyframe value, blended toward rest as the icon releases. */
private fun value(tracks: List<Track>, prop: Prop, frame: Frame): Float {
    val track = tracks.firstOrNull { it.prop == prop } ?: return prop.rest
    if (frame.release >= 1f) return prop.rest
    if (frame.release > 0f && track.snapBack) return prop.rest
    val live = track.valueAt(frame.time)
    return live + (prop.rest - live) * frame.release
}

/** Inherited paint of a group, as on the SVG: whether its shapes fill and stroke unless they say otherwise. */
private class Paint2(val fill: Boolean, val stroke: Boolean)

private val OUTLINE = Paint2(fill = false, stroke = true)
private val FILLED = Paint2(fill = true, stroke = true)
private val FILL_MASK = Paint2(fill = true, stroke = false)

/** Same drawing as the React package's <svg>: outline, plain solid, or solid with cuts and lines masked against the fills. */
private fun DrawScope.drawIcon(icon: PulsoIconSpec, solid: Boolean, color: Color, stroke: Float, frame: Frame) {
    val svgTracks = icon.svgMotion?.tracks(solid) ?: emptyList()
    val svgAlpha = if (icon.svgMotion == null) 1f else value(svgTracks, Prop.Opacity, frame).coerceIn(0f, 1f)
    if (svgAlpha <= 0f) return
    val body: DrawScope.() -> Unit = {
        if (!solid) {
            icon.nodes.forEach { drawNode(it, OUTLINE, filledMotion = false, color, stroke, frame) }
        } else {
            val fills = icon.solid.filter { it.role == SolidRole.Fill }
            val cuts = icon.solid.filter { it.role == SolidRole.Cut }
            val lines = icon.solid.filter { it.role == SolidRole.Line }
            val fillsFilled = { n: IconNode -> n.fill != false }
            if (cuts.isEmpty() && lines.isEmpty()) {
                fills.forEach { drawNode(it, FILLED, fillsFilled(it), color, stroke, frame) }
            } else {
                // Fills with the cuts and lines cut out of them.
                layer {
                    fills.forEach { drawNode(it, FILLED, fillsFilled(it), color, stroke, frame) }
                    (cuts + lines).forEach { drawNode(it, OUTLINE, filledMotion = false, Color.Black, stroke, frame, BlendMode.DstOut) }
                }
                // Lines, hidden where they run inside the fills.
                layer {
                    lines.forEach { drawNode(it, OUTLINE, filledMotion = false, color, stroke, frame) }
                    fills.forEach { drawNode(it, FILL_MASK, fillsFilled(it), Color.Black, stroke, frame, BlendMode.DstOut) }
                }
            }
        }
    }
    val group: DrawScope.() -> Unit = { if (svgAlpha < 1f) layer(svgAlpha) { body() } else body() }
    if (icon.svgMotion == null) group() else withMotion(icon.svgMotion, svgTracks, frame) { group() }
}

/** Draws [block] into its own layer (so DstOut only erases inside it), composited with [alpha]. */
private fun DrawScope.layer(alpha: Float = 1f, block: DrawScope.() -> Unit) {
    drawIntoCanvas { canvas ->
        canvas.saveLayer(Rect(-12f, -12f, 36f, 36f), Paint().apply { this.alpha = alpha })
        block()
        canvas.restore()
    }
}

/** The motion transform as CSS builds it: translate, scale, rotate, skewY, about the pivot. */
private inline fun DrawScope.withMotion(motion: IconMotion, tracks: List<Track>, frame: Frame, block: DrawScope.() -> Unit) {
    val x = value(tracks, Prop.X, frame)
    val y = value(tracks, Prop.Y, frame)
    val scale = value(tracks, Prop.Scale, frame)
    val sx = scale * value(tracks, Prop.ScaleX, frame)
    val sy = scale * value(tracks, Prop.ScaleY, frame)
    val rotation = value(tracks, Prop.Rotate, frame)
    val skew = value(tracks, Prop.SkewY, frame)
    val m = Matrix()
    m.translate(motion.ox + x, motion.oy + y)
    m.scale(sx, sy)
    m.rotateZ(rotation)
    if (skew != 0f) m.timesAssign(Matrix().apply { this[0, 1] = tan(Math.toRadians(skew.toDouble())).toFloat() })
    m.translate(-motion.ox, -motion.oy)
    withTransform({ transform(m) }) { block() }
}

/** One shape: static transform, then its motion (opacity, path drawing, transform), painted as the group says unless it says otherwise. */
private fun DrawScope.drawNode(
    node: IconNode,
    group: Paint2,
    filledMotion: Boolean,
    color: Color,
    strokeWidth: Float,
    frame: Frame,
    blendMode: BlendMode = BlendMode.SrcOver,
) {
    val fill = node.fill ?: group.fill
    val strokeOn = node.stroke ?: group.stroke
    if (!fill && !strokeOn) return
    val draw: DrawScope.() -> Unit = draw@{
        val motion = node.motion
        val tracks = motion?.tracks(filledMotion) ?: emptyList()
        val alpha = if (motion == null) 1f else value(tracks, Prop.Opacity, frame).coerceIn(0f, 1f)
        if (alpha <= 0f) return@draw
        val drawsOn = tracks.any { it.prop == Prop.PathLength }
        val paint: DrawScope.() -> Unit = {
            val length = if (drawsOn) value(tracks, Prop.PathLength, frame) else 1f
            val offset = if (drawsOn) value(tracks, Prop.PathOffset, frame) else 0f
            val path = if (!drawsOn || (length >= 1f && offset <= 0f)) node.shape.path else trimmed(node.shape.path, offset, (offset + length).coerceAtMost(1f))
            val tint = color.copy(alpha = color.alpha * alpha)
            if (fill) drawPath(path, tint, style = Fill, blendMode = blendMode)
            // Drawing a stroke on replaces any dash of its own, as motion does on the web.
            val dash = if (drawsOn) null else node.dash?.let { PathEffect.dashPathEffect(it) }
            if (strokeOn && (!drawsOn || length > 0f)) {
                drawPath(path, tint, style = Stroke(width = strokeWidth, cap = StrokeCap.Round, join = StrokeJoin.Round, pathEffect = dash), blendMode = blendMode)
            }
        }
        if (motion == null) paint() else withMotion(motion, tracks, frame) { paint() }
    }
    val m = node.matrix
    if (m == null) {
        draw()
    } else {
        val matrix = Matrix().apply {
            this[0, 0] = m[0]
            this[0, 1] = m[1]
            this[1, 0] = m[2]
            this[1, 1] = m[3]
            this[3, 0] = m[4]
            this[3, 1] = m[5]
        }
        withTransform({ transform(matrix) }) { draw() }
    }
}

/** The part of [path] between [from] and [to] of its total length (all contours, like SVG pathLength). */
private fun trimmed(path: Path, from: Float, to: Float): Path {
    val measure = android.graphics.PathMeasure(path.asAndroidPath(), false)
    var total = 0f
    do total += measure.length while (measure.nextContour())
    val start = from * total
    val end = to * total
    val out = android.graphics.Path()
    val walk = android.graphics.PathMeasure(path.asAndroidPath(), false)
    var walked = 0f
    do {
        val len = walk.length
        val s = (start - walked).coerceAtLeast(0f)
        val e = (end - walked).coerceAtMost(len)
        if (e > s) walk.getSegment(s, e, out, true)
        walked += len
    } while (walk.nextContour())
    return out.asComposePath()
}
