package com.citypulso.pulsoicon

import com.citypulso.pulsoicon.icons.Bell
import com.citypulso.pulsoicon.icons.BellIcon
import com.citypulso.pulsoicon.icons.Gear
import com.citypulso.pulsoicon.icons.ICON_NAMES
import com.citypulso.pulsoicon.icons.Settings
import com.citypulso.pulsoicon.icons.byKey
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Assert.assertSame
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * Checks the generated icons and the hand-ported recipes against pulsoicon-core, through the fixture
 * scripts/gen.ts writes from it (src/test/resources/parity.txt).
 */
class PulsoIconsTest {
    private val fixture: List<List<String>> =
        javaClass.classLoader!!.getResourceAsStream("parity.txt")!!.bufferedReader().readLines().filter { it.isNotBlank() }.map { it.split(" ") }

    @Test
    fun everyIconMatchesCore() {
        val icons = fixture.filter { it[0] == "icon" }
        assertEquals(icons.map { it[1] }, PulsoIcons.ICON_NAMES)
        for (row in icons) {
            val (_, key, name, svg, outline, fills, cuts, lines, recipes) = Row(row)
            val icon = PulsoIcons.byKey(key) ?: error("$key: not found")
            assertEquals(key, icon.key)
            assertEquals(name, icon.name)
            assertEquals(key, svg, icon.svgMotion?.recipe?.key ?: "-")
            assertEquals(key, outline.toInt(), icon.nodes.size)
            assertEquals(key, recipes, icon.nodes.joinToString(",") { it.motion?.recipe?.key ?: "-" })
            assertEquals("$key solid fills", fills.toInt(), icon.solid.count { it.role == SolidRole.Fill })
            assertEquals("$key solid cuts", cuts.toInt(), icon.solid.count { it.role == SolidRole.Cut })
            assertEquals("$key solid lines", lines.toInt(), icon.solid.count { it.role == SolidRole.Line })
            assertTrue("$key plays for no time", icon.duration(false) > 0f && icon.duration(true) > 0f)
        }
    }

    @Test
    fun recipesMatchCore() {
        val rows = fixture.filter { it[0] == "track" }
        assertTrue(rows.isNotEmpty())
        val byCall = rows.groupBy { it.subList(1, 6) }
        assertEquals(Recipe.entries.map { it.key }.toSet(), rows.map { it[1] }.toSet())
        for ((call, expected) in byCall) {
            val recipe = Recipe.entries.single { it.key == call[0] }
            val (d, x, y, a) = call.subList(1, 5).map { it.toFloat() }
            val tracks = recipe.tracks(d, x, y, a)
            val where = call.joinToString(" ")
            assertEquals(where, expected.map { it[6] }.sorted(), tracks.map { prop(it.prop) }.sorted())
            for (row in expected) {
                val track = tracks.single { prop(it.prop) == row[6] }
                val label = "$where ${row[6]}"
                assertEquals(label, row[7].toFloat(), track.duration, 1e-6f)
                assertEquals(label, row[8].toFloat(), track.delay, 1e-6f)
                val curve = row[9].split(",").map { it.toFloat() }
                assertEquals(label, curve, listOf(track.curve.x1, track.curve.y1, track.curve.x2, track.curve.y2))
                assertClose(label, row[10].split(",").map { it.toFloat() }, track.values.toList())
                if (row[11] == "-") assertNull(label, track.times) else assertClose(label, row[11].split(",").map { it.toFloat() }, track.times!!.toList())
            }
        }
    }

    @Test
    fun aliasesAndSuffixesPointAtTheIcon() {
        assertSame(PulsoIcons.Settings, PulsoIcons.Gear)
        assertSame(PulsoIcons.Bell, PulsoIcons.BellIcon)
        assertNull(PulsoIcons.byKey("no-such-icon"))
        assertNull(PulsoIcons.byKey(""))
        assertNull(PulsoIcons.byKey("zzzz"))
    }

    private fun assertClose(label: String, expected: List<Float>, actual: List<Float>) {
        assertEquals(label, expected.size, actual.size)
        expected.zip(actual).forEach { (e, a) -> assertEquals("$label: $expected vs $actual", e, a, 1e-4f) }
    }

    private fun prop(p: Prop) = p.name.replaceFirstChar { it.lowercase() }

    private class Row(val v: List<String>) {
        operator fun component1() = v[0]
        operator fun component2() = v[1]
        operator fun component3() = v[2]
        operator fun component4() = v[3]
        operator fun component5() = v[4]
        operator fun component6() = v[5]
        operator fun component7() = v[6]
        operator fun component8() = v[7]
        operator fun component9() = v[8]
    }
}
