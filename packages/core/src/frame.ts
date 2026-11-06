import type { RecipeState, RecipeVariants } from "./recipes.js";
import type { IconData, IconMotion, IconNode, IconNodeTag, SolidNode, SolidRole } from "./types.js";

import { RECIPES } from "./recipes.js";
import { SOLID_FALLBACK, solidNodes } from "./solid.js";

/**
 * The resting frame of an icon as a framework-free element tree, for the Vue and Svelte packages.
 * It is exactly what the React package renders (same elements, attributes, attribute order and inline styles,
 * which motion writes from each shape's resting state), so every package draws the same icon.
 * Elements that move carry their `motion`; the DOM player (`pulsoicon-core/dom`) animates them.
 */
export interface FrameElement {
  tag: "svg" | "g" | "defs" | "mask" | "rect" | IconNodeTag;
  /** Attribute names as written in the markup (`stroke-width`, `viewBox`), in render order. */
  attrs: Record<string, string>;
  children: FrameElement[];
  motion?: RecipeVariants;
}

/** The props every package takes, with the same defaults as the React package. */
export interface FrameOptions {
  /** Width and height; numbers are pixels. Default 24. */
  size?: number | string;
  /** Stroke (and, when solid, fill) colour. Default `currentColor`. */
  color?: string;
  /** Stroke width in the 24-unit grid. Default 2. */
  strokeWidth?: number | string;
  /** Keep the stroke width constant in pixels whatever the size. */
  absoluteStrokeWidth?: boolean;
  /** Filled glyph instead of outline. Default false. */
  solid?: boolean;
  /** Extra classes after `pulsoicon pulsoicon-<key>`. */
  className?: string;
  /** Unique per rendered icon; names the solid drawing's masks. */
  maskId: string;
}

/** Hover / focus on the closest of these plays the icon (the React package uses the same selector). */
export const TRIGGER_SELECTOR = 'button, a, label, summary, [role="button"], [role="menuitem"], [role="tab"], [role="link"], [data-icon-trigger]';

/** Masks reach past the 24×24 box, because motions move shapes outside it. */
const MASK_BOX = { x: "-12", y: "-12", width: "48", height: "48" };

const TRANSFORM_VALUES = ["x", "y", "rotate", "scale", "scaleX", "scaleY", "skewY"] as const;

export const toPixels = (size: number | string): number => (typeof size === "number" ? size : Number.parseFloat(size) || 24);

const variantsOf = (m: IconMotion, filled: boolean): RecipeVariants =>
  RECIPES[(filled && SOLID_FALLBACK[m.r]) || m.r]({ d: m.d ?? 0, x: m.x ?? 0, y: m.y ?? 0, a: m.a ?? 0 });

/** React prop names in the icon data (`strokeDasharray`) as markup attribute names (`stroke-dasharray`). */
const attrName = (name: string) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** The inline style motion writes for a resting state: `transform: none` when transforms are animated, and the resting opacity. */
function restingStyle(normal: RecipeState): { transform?: string; opacity?: string } {
  const moved = TRANSFORM_VALUES.filter((v) => normal[v] !== undefined);
  for (const v of moved) {
    if (normal[v] !== (v.startsWith("scale") ? 1 : 0)) throw new Error(`resting ${v} must be the identity`);
  }
  return { transform: moved.length ? "none" : undefined, opacity: normal.opacity !== undefined ? `${normal.opacity}` : undefined };
}

/** A shape: its own attributes, the path-drawing attributes when it draws on, and its pivot style. */
function shape(tag: IconNodeTag, own: Readonly<Record<string, string>>, m: IconMotion | undefined, filled: boolean): FrameElement {
  const attrs: Record<string, string> = {};
  for (const [k, v] of Object.entries(own)) if (k !== "transform" || !m) attrs[attrName(k)] = v;
  if (!m) return { tag, attrs, children: [] };
  const motion = variantsOf(m, filled);
  const { normal } = motion;
  if (normal.pathLength !== undefined) {
    attrs.pathLength = "1";
    attrs["stroke-dashoffset"] = `${-(Number(normal.pathOffset ?? 0)) || 0}`;
    attrs["stroke-dasharray"] = `${normal.pathLength} 1`;
  }
  const [x, y] = m.o ?? [12, 12];
  const rest = restingStyle(normal);
  attrs.style = ["transform-box:view-box", rest.transform && `transform:${rest.transform}`, rest.opacity && `opacity:${rest.opacity}`, `transform-origin:${x}px ${y}px 0`]
    .filter(Boolean)
    .join(";");
  const element: FrameElement = { tag, attrs, children: [], motion };
  // Motion drives the CSS transform, which would replace an SVG transform attribute, so that one moves to a wrapping group.
  return own.transform ? { tag: "g", attrs: { transform: own.transform }, children: [element] } : element;
}

const shapes = (nodes: readonly (IconNode | SolidNode)[], filled = false) =>
  nodes.map(([tag, attrs, m]) => shape(tag, attrs, m, filled && attrs.fill !== "none"));

const group = (attrs: Record<string, string>, children: FrameElement[]): FrameElement => ({ tag: "g", attrs, children });

/** The whole <svg> of the resting frame. The caller adds `aria-hidden="true"` and its own attributes first, as React does. */
export function iconFrame(data: IconData, options: FrameOptions): FrameElement {
  const { size = 24, color = "currentColor", strokeWidth = 2, absoluteStrokeWidth, solid = false, className, maskId } = options;
  const stroke = absoluteStrokeWidth ? (Number(strokeWidth) * 24) / toPixels(size) : Number(strokeWidth);
  const iconClass = `pulsoicon pulsoicon-${data.key}`;
  let children: FrameElement[];
  if (!solid) {
    children = shapes(data.nodes);
  } else {
    const nodes = solidNodes(data);
    const of = (role: SolidRole) => nodes.filter((n) => (n[3] ?? "fill") === role);
    const fills = () => shapes(of("fill"), true);
    const cuts = shapes(of("cut"));
    const lines = () => shapes(of("line"));
    if (cuts.length + of("line").length === 0) {
      children = [group({ fill: color }, fills())];
    } else {
      // Cuts and lines are cut out of the fills, and lines are hidden inside them; the mask copies move with their shapes.
      const mask = (id: string, content: FrameElement): FrameElement => ({
        tag: "mask",
        attrs: { id, maskUnits: "userSpaceOnUse", ...MASK_BOX },
        children: [{ tag: "rect", attrs: { ...MASK_BOX, fill: "white", stroke: "none" }, children: [] }, content],
      });
      children = [
        {
          tag: "defs",
          attrs: {},
          children: [
            mask(`${maskId}-fill`, group({ stroke: "black" }, [...cuts, ...lines()])),
            mask(`${maskId}-line`, group({ fill: "black", stroke: "none" }, fills())),
          ],
        },
        group({ fill: color, mask: `url(#${maskId}-fill)` }, fills()),
        group({ mask: `url(#${maskId}-line)` }, lines()),
      ];
    }
  }
  const attrs: Record<string, string> = {
    class: className ? `${iconClass} ${className}` : iconClass,
    fill: "none",
    height: `${size}`,
    stroke: color,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": `${stroke}`,
    viewBox: "0 0 24 24",
    width: `${size}`,
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (!data.svg) return { tag: "svg", attrs: { ...attrs, style: "overflow:visible" }, children };
  // The <svg> itself is laid out like an HTML box, so its pivot is a percentage of the icon.
  const motion = variantsOf(data.svg, solid);
  const [x, y] = data.svg.o ?? [12, 12];
  const rest = restingStyle(motion.normal);
  attrs.style = ["overflow:visible", `transform-origin:${(x / 24) * 100}% ${(y / 24) * 100}%`, rest.opacity && `opacity:${rest.opacity}`, rest.transform && `transform:${rest.transform}`]
    .filter(Boolean)
    .join(";");
  return { tag: "svg", attrs, children, motion };
}

/** Serialises a frame (the resting markup, for server rendering and tests). */
export function frameMarkup(element: FrameElement, lead: Record<string, string> = { "aria-hidden": "true" }): string {
  const escape = (v: string) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const render = (e: FrameElement, extra: Record<string, string> = {}): string => {
    const attrs = Object.entries({ ...extra, ...e.attrs })
      .map(([k, v]) => ` ${k}="${escape(v)}"`)
      .join("");
    return `<${e.tag}${attrs}>${e.children.map((c) => render(c)).join("")}</${e.tag}>`;
  };
  return render(element, lead);
}
