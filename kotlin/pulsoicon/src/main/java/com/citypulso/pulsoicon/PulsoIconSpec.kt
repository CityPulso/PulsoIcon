package com.citypulso.pulsoicon

import androidx.compose.runtime.Immutable
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.RoundRect
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.vector.PathParser

/** Every icon: `PulsoIcons.Bell`, its aliases (`PulsoIcons.Gear`), each also with an `Icon` suffix, and [byKey]. */
object PulsoIcons

/**
 * One recipe on one shape (or on the whole icon): delay [d] in seconds, direction [x] / [y], amplitude [a],
 * pivot ([ox], [oy]) in the 24×24 viewBox. Zero means "the recipe's default", exactly as in the React package.
 */
@Immutable
class IconMotion(
    val recipe: Recipe,
    val d: Float = 0f,
    val x: Float = 0f,
    val y: Float = 0f,
    val a: Float = 0f,
    val ox: Float = 12f,
    val oy: Float = 12f,
) {
    /** The keyframes it plays; on a filled solid shape the stroke-drawing recipes pop in instead. */
    fun tracks(filled: Boolean): List<Track> = if (filled) solidTracks else outlineTracks

    private val outlineTracks: List<Track> by lazy { recipe.tracks(d, x, y, a) }
    private val solidTracks: List<Track> by lazy { if (recipe.solidFallback == recipe) outlineTracks else recipe.solidFallback.tracks(d, x, y, a) }
}

/** The geometry of one shape in the 24×24 viewBox. */
@Immutable
sealed class IconShape {
    class PathData(val d: String) : IconShape()
    class Circle(val cx: Float, val cy: Float, val r: Float) : IconShape()
    class Ellipse(val cx: Float, val cy: Float, val rx: Float, val ry: Float) : IconShape()
    class Rectangle(val x: Float, val y: Float, val width: Float, val height: Float, val rx: Float, val ry: Float) : IconShape()
    class Line(val x1: Float, val y1: Float, val x2: Float, val y2: Float) : IconShape()
    class Poly(val points: FloatArray, val closed: Boolean) : IconShape()

    /** The outline as a path in viewBox units, built once. */
    internal val path: Path by lazy { buildPath() }

    private fun buildPath(): Path = when (this) {
        is PathData -> PathParser().parsePathString(d).toPath()
        is Circle -> Path().apply { addOval(Rect(cx - r, cy - r, cx + r, cy + r)) }
        is Ellipse -> Path().apply { addOval(Rect(cx - rx, cy - ry, cx + rx, cy + ry)) }
        // SVG clamps each radius to half the side.
        is Rectangle -> Path().apply {
            addRoundRect(RoundRect(x, y, x + width, y + height, CornerRadius(rx.coerceAtMost(width / 2), ry.coerceAtMost(height / 2))))
        }
        is Line -> Path().apply { moveTo(x1, y1); lineTo(x2, y2) }
        is Poly -> Path().apply {
            moveTo(points[0], points[1])
            var i = 2
            while (i + 1 < points.size) {
                lineTo(points[i], points[i + 1])
                i += 2
            }
            if (closed) close()
        }
    }
}

/** How a solid shape is drawn (pulsoicon-core `SolidRole`): filled, a stroke cut out of the fills, or a line cut out and drawn outside them. */
enum class SolidRole { Fill, Cut, Line }

/**
 * One shape of an icon, as in the SVG: its own `fill` / `stroke` when set (null = inherit from the group),
 * a static `stroke-dasharray`, and a static `transform` as an SVG matrix (a b c d e f).
 */
@Immutable
class IconNode(
    val shape: IconShape,
    val motion: IconMotion?,
    val fill: Boolean?,
    val stroke: Boolean?,
    val dash: FloatArray?,
    val matrix: FloatArray?,
    val role: SolidRole,
)

/** One animated icon: the outline drawing, the solid drawing and the motion of the whole icon. */
@Immutable
class PulsoIconSpec internal constructor(
    /** PascalCase name, e.g. `Bell`. */
    val name: String,
    /** kebab-case key shared with every package (`pulsoicon/names`), e.g. `bell`; what gets stored on items. */
    val key: String,
    val svgMotion: IconMotion?,
    private val buildOutline: IconBuilder.() -> Unit,
    private val buildSolid: IconBuilder.() -> Unit,
) {
    val nodes: List<IconNode> by lazy { IconBuilder().apply(buildOutline).nodes }

    /** The designed solid drawing, or the one pulsoicon-core `autoSolid` derived from the outline (computed when generating). */
    val solid: List<IconNode> by lazy { IconBuilder().apply(buildSolid).nodes }

    /** Seconds until every part has finished playing. */
    fun duration(solid: Boolean): Float {
        val tracks = if (solid) {
            this.solid.mapNotNull { n -> n.motion?.tracks(n.role == SolidRole.Fill && n.fill != false) }.flatten() + (svgMotion?.tracks(true) ?: emptyList())
        } else {
            nodes.mapNotNull { it.motion?.tracks(false) }.flatten() + (svgMotion?.tracks(false) ?: emptyList())
        }
        return tracks.maxOfOrNull { it.delay + it.duration } ?: 0f
    }
}

/** Builder used by the generated icon files. */
class IconBuilder internal constructor() {
    internal val nodes = ArrayList<IconNode>()

    fun path(d: String, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.PathData(d), motion, fill, stroke, dash, matrix, role)

    fun circle(cx: Float, cy: Float, r: Float, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Circle(cx, cy, r), motion, fill, stroke, dash, matrix, role)

    fun ellipse(cx: Float, cy: Float, rx: Float, ry: Float, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Ellipse(cx, cy, rx, ry), motion, fill, stroke, dash, matrix, role)

    fun rect(x: Float, y: Float, width: Float, height: Float, rx: Float = 0f, ry: Float = rx, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Rectangle(x, y, width, height, rx, ry), motion, fill, stroke, dash, matrix, role)

    fun line(x1: Float, y1: Float, x2: Float, y2: Float, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Line(x1, y1, x2, y2), motion, fill, stroke, dash, matrix, role)

    fun polyline(points: FloatArray, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Poly(points, closed = false), motion, fill, stroke, dash, matrix, role)

    fun polygon(points: FloatArray, motion: IconMotion? = null, fill: Boolean? = null, stroke: Boolean? = null, dash: FloatArray? = null, matrix: FloatArray? = null, role: SolidRole = SolidRole.Fill) =
        add(IconShape.Poly(points, closed = true), motion, fill, stroke, dash, matrix, role)

    private fun add(shape: IconShape, motion: IconMotion?, fill: Boolean?, stroke: Boolean?, dash: FloatArray?, matrix: FloatArray?, role: SolidRole) {
        nodes += IconNode(shape, motion, fill, stroke, dash, matrix, role)
    }
}

/** Builds an icon; used by the generated files in `icons/`. Neither drawing is built until it is first drawn. */
fun icon(name: String, key: String, svg: IconMotion? = null, outline: IconBuilder.() -> Unit, solid: IconBuilder.() -> Unit): PulsoIconSpec =
    PulsoIconSpec(name, key, svg, outline, solid)
