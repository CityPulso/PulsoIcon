import type { MotionStyle } from "motion/react";
import type { ElementType, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import type { Box, Point, Subpath } from "./geometry.js";
import type { RecipeName, RecipeVariants } from "./recipes.js";

import { createElement, forwardRef, useCallback, useEffect, useId, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "motion/react";

import { along, area, boxOf, distanceTo, insideOf, length, pathPieces, subpathsOf } from "./geometry.js";
import { RECIPES } from "./recipes.js";

/** One recipe on one element: delay `d`, direction `x`/`y`, amplitude `a`, pivot `o` as a point in the 24×24 viewBox. */
export interface IconMotion {
  r: RecipeName;
  d?: number;
  x?: number;
  y?: number;
  a?: number;
  o?: readonly [number, number];
}

export type IconNodeTag = "path" | "line" | "circle" | "rect" | "ellipse" | "polyline" | "polygon";

/** One shape of the icon (tag + attributes) plus an optional motion. */
export type IconNode = readonly [tag: IconNodeTag, attrs: Readonly<Record<string, string>>, motion?: IconMotion];

/**
 * How a solid shape is drawn:
 * `fill` (default) is filled and stroked in `color`, so outline geometry keeps its size (add `stroke: "none"` for a pure fill);
 * `cut` is a stroke cut out of the fills, a detail that reads as a hole;
 * `line` is cut out of the fills too, and drawn as a stroke where it leaves them.
 */
export type SolidRole = "fill" | "cut" | "line";

/** One shape of the solid drawing. Each part moving on its own carries the same motion as its outline counterpart. */
export type SolidNode = readonly [tag: IconNodeTag, attrs: Readonly<Record<string, string>>, motion?: IconMotion, role?: SolidRole];

export interface IconSpec {
  svg?: IconMotion;
  nodes: readonly IconNode[];
  /** Drawing used when `solid` is set. Without it, closed outline shapes are filled and open ones are lines. */
  solid?: readonly SolidNode[];
  /** Letters or digits: the automatic solid keeps them as strokes, filling only shapes around them. */
  text?: boolean;
}

/** Imperative control through `ref`. Both resolve when the motion has finished. */
export interface IconHandle {
  /** Play the icon's motion (does nothing when the system asks for reduced motion, or when `animated` is false). */
  startAnimation: () => Promise<void>;
  /** Return to the resting frame. */
  stopAnimation: () => Promise<void>;
}

export interface BaseIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "ref" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
> {
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
}

/**
 * `animated={false}`: the icon never moves (ref and `play` do nothing).
 * Otherwise the ref and `play` always work; `autoAnimated` only decides whether hover / focus of the
 * closest interactive ancestor also plays it.
 */
export type AnimationProps =
  | { animated: false; autoAnimated?: never; play?: never }
  | {
      animated?: true;
      /** Play on hover / focus of the closest interactive ancestor. Default true. */
      autoAnimated?: boolean;
      /** true plays the motion, false returns to the resting frame. */
      play?: boolean;
    };

export type IconProps = BaseIconProps & AnimationProps;

/** `Omit` applied to each member of a union, so `DistributiveOmit<IconProps, "size">` keeps the animation checks. */
export type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export type PulsoIcon = ForwardRefExoticComponent<IconProps & RefAttributes<IconHandle>>;

/**
 * Hover / focus on the closest interactive ancestor plays the icon, so a whole button animates its glyph.
 * Other containers opt in with `data-icon-trigger`.
 */
const TRIGGER_SELECTOR = 'button, a, label, summary, [role="button"], [role="menuitem"], [role="tab"], [role="link"], [data-icon-trigger]';

const MOTION_TAGS: Record<IconNodeTag, ElementType> = {
  path: motion.path,
  line: motion.line,
  circle: motion.circle,
  rect: motion.rect,
  ellipse: motion.ellipse,
  polyline: motion.polyline,
  polygon: motion.polygon,
};

interface Prepared {
  variants: RecipeVariants;
  style: MotionStyle;
}

/** Masks reach past the 24×24 box, because motions move shapes outside it. */
const MASK_BOX = { x: "-12", y: "-12", width: "48", height: "48" };

interface PreparedNode {
  tag: IconNodeTag;
  attrs: Readonly<Record<string, string>>;
  prepared?: Prepared;
}

interface SolidParts {
  fills: PreparedNode[];
  cuts: PreparedNode[];
  lines: PreparedNode[];
}

const EMPTY_SOLID: SolidParts = { fills: [], cuts: [], lines: [] };

/** Stroke-drawing recipes have nothing to draw on a filled shape, so solid shapes pop in instead. */
const SOLID_FALLBACK: Partial<Record<RecipeName, RecipeName>> = { draw: "pop", drawBack: "pop", drawOut: "pop", redraw: "pop" };

const variantsOf = (m: IconMotion, filled: boolean) => RECIPES[(filled && SOLID_FALLBACK[m.r]) || m.r]({ d: m.d ?? 0, x: m.x ?? 0, y: m.y ?? 0, a: m.a ?? 0 });

/** Shapes pivot on an absolute viewBox point, so a group of shapes moves as one rigid piece. */
function prepareNode(m: IconMotion, filled: boolean): Prepared {
  const [x, y] = m.o ?? [12, 12];
  // Motion builds transform-origin from originX/originY itself; a plain transformOrigin style would be overwritten by its 50% 50% default.
  return { variants: variantsOf(m, filled), style: { transformBox: "view-box", originX: `${x}px`, originY: `${y}px` } };
}

/** The <svg> itself is laid out like an HTML box, so its pivot is a percentage of the icon. */
function prepareSvg(m: IconMotion, filled: boolean): Prepared {
  const [x, y] = m.o ?? [12, 12];
  return { variants: variantsOf(m, filled), style: { transformOrigin: `${(x / 24) * 100}% ${(y / 24) * 100}%` } };
}

/**
 * SVG closes an open run when filling it, so some open runs fill like closed ones: a bell whose ends meet, a half sun
 * (an upright or level half arc becomes a half disc), a user's shoulders, and a van body whose open side is bridged by other strokes (its wheels).
 * Arches left open (a letter A, a U-turn arrow) and longer arcs (a spinner, which would become a pie slice) stay lines.
 */
function encloses({ points, closed, curved, bent }: Subpath, others: readonly (readonly Point[])[]): boolean {
  const enclosed = area(points);
  if (closed) return enclosed > 0.5;
  if (enclosed < 8) return false;
  const [x0, y0] = points[0];
  const [x1, y1] = points[points.length - 1];
  const gap = Math.hypot(x1 - x0, y1 - y0);
  if (gap <= 2) return true;
  if (curved) return Math.min(Math.abs(x1 - x0), Math.abs(y1 - y0)) < 0.5 && enclosed >= 0.3 * gap * gap && enclosed <= 0.5 * gap * gap;
  // Shoulders standing on the bottom edge (a user's body) are open only along the edge.
  if (bent && Math.abs(y1 - y0) < 0.5 && y0 >= 20.5 && gap >= 8) {
    const height = y0 - Math.min(...points.map(([, y]) => y));
    if (height > 3 && height < 0.8 * gap) return true;
  }
  if (gap > 0.45 * length(points)) return false;
  let bridged = 0;
  for (let k = 1; k < 10; k++) {
    const p: Point = [x1 + ((x0 - x1) * k) / 10, y1 + ((y0 - y1) * k) / 10];
    if (others.some((o) => distanceTo(p, o) <= 1.6)) bridged++;
  }
  return bridged >= 7;
}

const inside = (a: Box, b: Box) => a.x0 >= b.x0 - 0.01 && a.y0 >= b.y0 - 0.01 && a.x1 <= b.x1 + 0.01 && a.y1 <= b.y1 + 0.01;
const boxArea = (b: Box) => (b.x1 - b.x0) * (b.y1 - b.y0);

/**
 * Without a designed solid drawing: shapes that enclose an area are filled, a filled shape lying inside a larger one
 * (a keyhole, a badge star) is cut out of it, and everything else is a line.
 * Each run of a path is its own shape, so overlapping runs merge. A `wordmark` (brand icon) also treats letters drawn as
 * circles or closed bowls as text; in `text` icons only shapes larger than a glyph (a badge around a letter) fill.
 */
export function autoSolid(nodes: readonly IconNode[], kind?: "text" | "wordmark"): SolidNode[] {
  const wordmark = kind === "wordmark";
  const pieces = nodes.flatMap(([tag, attrs, m]) => {
    const split = tag === "path" && !attrs.transform ? pathPieces(attrs.d ?? "") : [];
    const all: Readonly<Record<string, string>>[] = split.length > 1 ? split.map((d) => ({ ...attrs, d })) : [attrs];
    return all.map((a) => ({ tag, attrs: a, m, subpaths: subpathsOf(tag, a) }));
  });
  const shapes = pieces.map(({ attrs, subpaths }, i) => {
    const others = pieces.flatMap((p, j) => (j === i ? [] : p.subpaths.map((s) => s.points)));
    return { filled: subpaths.some((s) => encloses(s, others)), box: attrs.transform ? undefined : boxOf(subpaths) };
  });
  // A row of open strokes of one height, each narrower than tall, is lettering ("BMP"): filling would close the letters' counters.
  const glyph = (i: number) => {
    const { box } = shapes[i];
    const open = pieces[i].subpaths.every((s) => !s.closed);
    return !!box && open && box.y1 - box.y0 >= 5 && box.x1 - box.x0 <= 0.8 * (box.y1 - box.y0);
  };
  const lettering = shapes.map(
    ({ box }, i) => glyph(i) && shapes.some(({ box: b }, j) => j !== i && glyph(j) && !!box && !!b && Math.abs(b.y0 - box.y0) < 0.6 && Math.abs(b.y1 - box.y1) < 0.6),
  );
  // In wordmarks (and icons already showing text) letters may also be circles or closed bowls ("ag", "BSD"):
  // any glyph-sized pieces standing side by side without overlapping are a line of text.
  if (wordmark || lettering.some(Boolean)) {
    const letter = (b: Box | undefined) => !!b && b.y1 - b.y0 >= 3 && b.y1 - b.y0 <= 12 && b.x1 - b.x0 <= 1.3 * (b.y1 - b.y0) + 1;
    shapes.forEach(({ box }, i) => {
      const row = shapes.some(({ box: b }, j) => {
        if (j === i || !letter(box) || !letter(b) || !box || !b) return false;
        const shared = Math.min(box.y1, b.y1) - Math.max(box.y0, b.y0);
        const overlapX = Math.min(box.x1, b.x1) - Math.max(box.x0, b.x0);
        const apart = Math.max(box.x0, b.x0) - Math.min(box.x1, b.x1);
        return shared >= 0.5 * Math.min(box.y1 - box.y0, b.y1 - b.y0) && apart <= 5 && overlapX < 0.2 * Math.min(box.x1 - box.x0, b.x1 - b.x0);
      });
      if (row) lettering[i] = true;
    });
  }
  if (kind === "text") {
    shapes.forEach(({ box }, i) => {
      if (box && box.y1 - box.y0 <= 16.5 && box.x1 - box.x0 <= 16.5) lettering[i] = true;
    });
  }
  lettering.forEach((l, i) => l && (shapes[i].filled = false));
  // Rings crossing around one centre (atom orbits) would fill into a blob, so they stay strokes.
  const centre = (b: Box) => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
  const crossing = shapes.map(
    ({ filled, box }, i) =>
      filled &&
      box &&
      shapes.some(({ filled: f, box: b }, j) => {
        if (j === i || !f || !b) return false;
        const [x0, y0] = centre(box);
        const [x1, y1] = centre(b);
        if (Math.hypot(x1 - x0, y1 - y0) >= 1 || boxArea(b) > 2 * boxArea(box) || boxArea(box) > 2 * boxArea(b)) return false;
        // Same centre and size: crossing unless one shape is the other's outline (a ring inside a disc).
        const a = area(pieces[i].subpaths[0].points);
        const other = area(pieces[j].subpaths[0].points);
        return (
          Math.min(a, other) > 0.6 * Math.max(a, other) &&
          !pieces[i].subpaths.every((s) => along(s.points).every((p) => pieces[j].subpaths.some((t) => insideOf(p, t.points) || distanceTo(p, t.points) < 0.5)))
        );
      }),
  );
  crossing.forEach((c, i) => c && (shapes[i].filled = false));
  const nested = shapes.map(
    ({ filled, box }, i) =>
      filled &&
      shapes.some(
        (other, j) =>
          j !== i &&
          other.filled &&
          box &&
          other.box &&
          inside(box, other.box) &&
          boxArea(other.box) > boxArea(box) &&
          pieces[j].subpaths.some((s) => insideOf([(box.x0 + box.x1) / 2, (box.y0 + box.y1) / 2], s.points)),
      ),
  );
  const areas = pieces.flatMap((p, i) => (shapes[i].filled && !nested[i] ? p.subpaths.map((s) => [...s.points, s.points[0]]) : []));
  // A line running through a filled area is a detail cut out of it; one along its edge or outside is simply drawn.
  const crosses = (subpaths: readonly Subpath[]) => subpaths.some((s) => along(s.points).some((p) => areas.some((ring) => insideOf(p, ring) && distanceTo(p, ring) > 1.2)));
  return pieces.flatMap(({ tag, attrs, m, subpaths }, i): SolidNode[] => {
    if (!shapes[i].filled) return [crosses(subpaths) ? [tag, attrs, m, "line"] : [tag, { ...attrs, fill: "none" }, m, "fill"]];
    if (nested[i]) return [[tag, attrs, m, "cut"]];
    const gap = wheelGap(subpaths, i);
    return gap
      ? [
          [tag, attrs, m, "fill"],
          ["circle", gap, m, "cut"],
        ]
      : [[tag, attrs, m, "fill"]];
  });

  /**
   * A round part overlapping another fill (a wheel on a body, the front one of two overlapping circles) is set apart
   * from it by a ring cut around it, instead of merging into one blob.
   */
  function wheelGap(subpaths: readonly Subpath[], i: number): Record<string, string> | undefined {
    const box = shapes[i].box;
    if (!box || subpaths.length !== 1) return undefined;
    const r = (box.x1 - box.x0) / 2;
    const enclosed = area(subpaths[0].points);
    if (Math.abs(box.y1 - box.y0 - 2 * r) > 0.3 || enclosed < 0.9 * Math.PI * r * r || enclosed > 1.1 * Math.PI * r * r) return undefined;
    const centre: Point = [(box.x0 + box.x1) / 2, (box.y0 + box.y1) / 2];
    const behind = (j: number, other: Box) => boxArea(other) > boxArea(box) || (j < i && boxArea(other) >= 0.5 * boxArea(box));
    const touches = shapes.some(
      (other, j) =>
        j !== i &&
        other.filled &&
        !nested[j] &&
        other.box &&
        behind(j, other.box) &&
        pieces[j].subpaths.some((s) => insideOf(centre, s.points) || distanceTo(centre, [...s.points, s.points[0]]) < r + 1),
    );
    return touches ? { cx: `${round(centre[0])}`, cy: `${round(centre[1])}`, r: `${round(r + 2)}` } : undefined;
  }
}

const round = (v: number) => Number(v.toFixed(3));

const prepareNodes = (nodes: readonly (IconNode | SolidNode)[], filled = false): PreparedNode[] =>
  nodes.map(([tag, attrs, m]) => ({ tag, attrs, prepared: m ? prepareNode(m, filled && attrs.fill !== "none") : undefined }));

function prepareSolid(nodes: readonly SolidNode[]): SolidParts {
  const of = (role: SolidRole) => nodes.filter((n) => (n[3] ?? "fill") === role);
  return { fills: prepareNodes(of("fill"), true), cuts: prepareNodes(of("cut")), lines: prepareNodes(of("line")) };
}

const specs = new WeakMap<PulsoIcon, IconSpec>();

/** The shapes and motions an icon was built from. */
export const iconSpec = (icon: PulsoIcon): IconSpec | undefined => specs.get(icon);

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function toPixels(size: number | string): number {
  return typeof size === "number" ? size : Number.parseFloat(size) || 24;
}

/**
 * Builds one animated icon from its shapes and choreography (`iconName` is the kebab-case name used in the CSS class).
 * The resting frame is the static icon; hover / focus (or the ref handle) plays the motion.
 * Props match lucide-react, so it is a drop-in replacement.
 */
export function createIcon(displayName: string, iconName: string, spec: IconSpec): PulsoIcon {
  const outlineSvg = spec.svg ? prepareSvg(spec.svg, false) : undefined;
  const outline = prepareNodes(spec.nodes);
  const solidSvg = spec.svg ? prepareSvg(spec.svg, true) : undefined;
  let solid: SolidParts | undefined;
  const solidParts = () => (solid ??= prepareSolid(spec.solid ?? autoSolid(spec.nodes, spec.text ? "text" : iconName.startsWith("brand-") ? "wordmark" : undefined)));
  const iconClass = `pulsoicon pulsoicon-${iconName}`;

  const Icon = forwardRef<IconHandle, IconProps>((props, ref) => {
    const {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      absoluteStrokeWidth,
      solid: isSolid = false,
      animated = true,
      autoAnimated = true,
      play,
      className,
      style,
      ...rest
    } = props;
    const controls = useAnimation();
    const svgRef = useRef<SVGSVGElement>(null);
    const maskId = `pulsoicon${useId().replace(/[^\w-]/g, "")}`;

    const start = useCallback(async () => {
      if (animated && !prefersReducedMotion()) await controls.start("animate");
    }, [animated, controls]);
    const stop = useCallback(async () => {
      if (animated) await controls.start("normal");
    }, [animated, controls]);

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }), [start, stop]);

    useEffect(() => {
      if (!animated) controls.set("normal");
    }, [animated, controls]);

    useEffect(() => {
      if (!animated || play === undefined) return;
      void (play ? start() : stop());
    }, [animated, play, start, stop]);

    useEffect(() => {
      const svg = svgRef.current;
      if (!animated || !autoAnimated || !svg) return;
      const trigger = svg.closest<HTMLElement>(TRIGGER_SELECTOR) ?? svg;
      const play = () => void start();
      const rest = () => void stop();
      trigger.addEventListener("pointerenter", play);
      trigger.addEventListener("pointerleave", rest);
      trigger.addEventListener("focusin", play);
      trigger.addEventListener("focusout", rest);
      return () => {
        trigger.removeEventListener("pointerenter", play);
        trigger.removeEventListener("pointerleave", rest);
        trigger.removeEventListener("focusin", play);
        trigger.removeEventListener("focusout", rest);
      };
    }, [animated, autoAnimated, start, stop]);

    const px = toPixels(size);
    const stroke = absoluteStrokeWidth ? (Number(strokeWidth) * 24) / px : Number(strokeWidth);
    const svgMotion = isSolid ? solidSvg : outlineSvg;
    const { fills, cuts, lines } = isSolid ? solidParts() : EMPTY_SOLID;
    const holes = cuts.length + lines.length > 0;

    const renderNodes = (list: readonly PreparedNode[]) =>
      list.map(({ tag, attrs, prepared }, i) => {
        if (!prepared) return createElement(tag, { key: i, ...attrs });
        // Motion drives the CSS transform, which would replace an SVG transform attribute, so that one moves to a wrapping group.
        const { transform, ...own } = attrs;
        const shape = createElement(MOTION_TAGS[tag], { key: i, ...own, animate: controls, initial: "normal", variants: prepared.variants, style: prepared.style });
        return transform ? createElement("g", { key: i, transform }, shape) : shape;
      });

    return (
      <motion.svg
        aria-hidden="true"
        {...(rest as object)}
        animate={controls}
        className={className ? `${iconClass} ${className}` : iconClass}
        fill="none"
        height={size}
        initial="normal"
        ref={svgRef}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        style={{ overflow: "visible", ...svgMotion?.style, ...style }}
        variants={svgMotion?.variants}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isSolid ? (
          renderNodes(outline)
        ) : !holes ? (
          <g fill={color}>{renderNodes(fills)}</g>
        ) : (
          // Cuts and lines are cut out of the fills, and lines are hidden inside them; the mask copies share the controls and move with their shapes.
          <>
            <defs>
              <mask id={`${maskId}-fill`} maskUnits="userSpaceOnUse" {...MASK_BOX}>
                <rect {...MASK_BOX} fill="white" stroke="none" />
                <g stroke="black">
                  {renderNodes(cuts)}
                  {renderNodes(lines)}
                </g>
              </mask>
              <mask id={`${maskId}-line`} maskUnits="userSpaceOnUse" {...MASK_BOX}>
                <rect {...MASK_BOX} fill="white" stroke="none" />
                <g fill="black" stroke="none">
                  {renderNodes(fills)}
                </g>
              </mask>
            </defs>
            <g fill={color} mask={`url(#${maskId}-fill)`}>
              {renderNodes(fills)}
            </g>
            <g mask={`url(#${maskId}-line)`}>{renderNodes(lines)}</g>
          </>
        )}
      </motion.svg>
    );
  });
  Icon.displayName = displayName;
  specs.set(Icon, spec);
  return Icon;
}
