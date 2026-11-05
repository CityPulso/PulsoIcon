import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import * as Pulso from "pulsoicon";
import { ICON_NAMES, ICONS } from "pulsoicon/all";
import { iconSpec } from "pulsoicon/runtime/createIcon.js";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

const iconsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "icons");
const SHAPE = /<(path|line|circle|rect|ellipse|polyline|polygon)\b/g;

describe("icon set", () => {
  it("has one entry per icon file", () => {
    const files = readdirSync(iconsDir)
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => f.replace(/\.tsx$/, ""))
      .sort();
    expect([...ICON_NAMES].sort()).toEqual(files);
  });

  it("exports every icon from the main entry, plus its Icon-suffixed name", () => {
    const exported = new Set(Object.values(Pulso));
    const missing = ICON_NAMES.filter((name) => !exported.has(ICONS[name]));
    expect(missing).toEqual([]);
    for (const name of ICON_NAMES) {
      const display = ICONS[name].displayName as keyof typeof Pulso;
      expect(Pulso[display], name).toBe(ICONS[name]);
      expect(Pulso[`${display}Icon` as keyof typeof Pulso], name).toBe(ICONS[name]);
    }
  });

  it("renders every icon as a 24×24 svg with its shapes", () => {
    const empty = ICON_NAMES.filter((name) => {
      const markup = renderToStaticMarkup(createElement(ICONS[name]));
      return !markup.startsWith("<svg") || !markup.includes('viewBox="0 0 24 24"') || !markup.includes(`pulsoicon-${name}`) || (markup.match(SHAPE) ?? []).length === 0;
    });
    expect(empty).toEqual([]);
  });

  it("animates at least one part of every icon", () => {
    // Animated shapes carry a pivot (transform-origin) or a pathLength-driven dash, the resting svg never does.
    const still = ICON_NAMES.filter((name) => {
      const markup = renderToStaticMarkup(createElement(ICONS[name]));
      return !/transform-origin|stroke-dasharray|pathLength/i.test(markup);
    });
    expect(still).toEqual([]);
  });
});

describe("pivots", () => {
  it("rotate each shape about its own point, not the icon centre", () => {
    // Motion overwrites a plain transformOrigin with 50% 50%; the bell must swing from its top (12, 3).
    const markup = renderToStaticMarkup(createElement(Pulso.Bell));
    expect(markup).toContain("transform-origin:12px 3px");
    expect(markup).not.toContain("transform-origin:50% 50%");
  });
});

describe("props", () => {
  const render = (props: Record<string, unknown>) => renderToStaticMarkup(createElement(Pulso.Calendar, props));

  it("defaults to lucide-compatible attributes", () => {
    const markup = render({});
    expect(markup).toContain('width="24"');
    expect(markup).toContain('stroke="currentColor"');
    expect(markup).toContain('stroke-width="2"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar"');
  });

  it("applies size, color, strokeWidth and className", () => {
    const markup = render({ size: 40, color: "red", strokeWidth: 1.5, className: "x" });
    expect(markup).toContain('width="40"');
    expect(markup).toContain('stroke="red"');
    expect(markup).toContain('stroke-width="1.5"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar x"');
  });

  it("keeps the stroke constant in pixels with absoluteStrokeWidth", () => {
    expect(render({ size: 48, absoluteStrokeWidth: true })).toContain('stroke-width="1"');
  });

  it("keeps solid and the animation props off the svg", () => {
    for (const props of [{ animated: false }, { autoAnimated: false, play: true }, { play: false, solid: true }]) {
      expect(render(props)).not.toMatch(/animated|play=|solid=/i);
    }
  });
});

describe("solid", () => {
  const render = (icon: keyof typeof Pulso, props: Record<string, unknown> = {}) => renderToStaticMarkup(createElement(Pulso[icon] as Pulso.PulsoIcon, { solid: true, ...props }));

  it("draws pure solid shapes as fills in the icon colour", () => {
    const markup = render("Heart", { color: "red" });
    expect(markup).toContain('<g fill="red"><path');
    expect(markup).toContain('stroke="none"');
    expect(markup).not.toContain("<mask");
    expect(markup).not.toContain("stroke-dasharray");
  });

  it("moves every solid part like its outline counterpart", () => {
    // Same set of motions on both sides, including "stays still": a merged shape can't take one part's motion.
    const motions = (nodes: readonly (readonly unknown[])[]) =>
      new Set(nodes.map((n) => (n[2] ? JSON.stringify(Object.entries(n[2] as object).sort(([a], [b]) => a.localeCompare(b))) : "still")));
    const off = ICON_NAMES.filter((name) => {
      const spec = iconSpec(ICONS[name])!;
      if (!spec.solid) return false;
      const outline = motions(spec.nodes);
      const solid = motions(spec.solid);
      return outline.size !== solid.size || [...outline].some((m) => !solid.has(m));
    });
    expect(off).toEqual([]);
  });

  it("fills closed outline shapes and cuts open lines out of them when there is no solid drawing", () => {
    const markup = render("AlarmClockCheck", { color: "red" });
    expect(markup).toMatch(/<g fill="red" mask="url\(#pulsoicon[\w-]+-fill\)"><circle/);
    expect(markup).toMatch(/<mask id="pulsoicon[\w-]+-fill"/);
    expect(markup).toContain('stroke="red"');
  });

  it("renders every icon solid", () => {
    const empty = ICON_NAMES.filter((name) => (renderToStaticMarkup(createElement(ICONS[name], { solid: true })).match(SHAPE) ?? []).length === 0);
    expect(empty).toEqual([]);
  }, 120_000);
});

describe("recipes", () => {
  it("give every recipe a resting and an animated state", () => {
    for (const name of Pulso.RECIPE_NAMES) {
      const variants = Pulso.RECIPES[name]({ d: 0.1, x: 1, y: -1, a: 2 });
      expect(variants.normal, name).toBeTypeOf("object");
      expect(variants.animate, name).toBeTypeOf("object");
    }
  });
});
