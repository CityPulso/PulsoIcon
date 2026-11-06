import type { MotionStyle, Variants } from "motion/react";
import type { ElementType, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import type { IconMotion, IconNode, IconNodeTag, IconSpec, SolidNode, SolidRole } from "pulsoicon-core";

import { createElement, forwardRef, useCallback, useEffect, useId, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "motion/react";
import { RECIPES, SOLID_FALLBACK, solidNodes } from "pulsoicon-core";

export type { IconMotion, IconNode, IconNodeTag, IconSpec, SolidNode, SolidRole } from "pulsoicon-core";

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
  variants: Variants;
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
  const solidParts = () => (solid ??= prepareSolid(solidNodes({ ...spec, name: displayName, key: iconName })));
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
