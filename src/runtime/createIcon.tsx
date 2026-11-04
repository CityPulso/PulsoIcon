import type { CSSProperties, ElementType, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import type { RecipeName, RecipeVariants } from "./recipes.js";

import { createElement, forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "motion/react";

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

export interface IconSpec {
  svg?: IconMotion;
  nodes: readonly IconNode[];
}

/** Imperative control through `ref`. Both resolve when the motion has finished. */
export interface IconHandle {
  /** Play the icon's motion (does nothing when the system asks for reduced motion). */
  startAnimation: () => Promise<void>;
  /** Return to the resting frame. */
  stopAnimation: () => Promise<void>;
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"> {
  /** Width and height; numbers are pixels. Default 24. */
  size?: number | string;
  /** Stroke colour. Default `currentColor`. */
  color?: string;
  /** Stroke width in the 24-unit grid. Default 2. */
  strokeWidth?: number | string;
  /** Keep the stroke width constant in pixels whatever the size. */
  absoluteStrokeWidth?: boolean;
  /** Play on hover / focus of the closest interactive ancestor. Default true; false keeps the icon still (ref still works). */
  animated?: boolean;
}

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
  style: CSSProperties;
}

const variantsOf = (m: IconMotion) => RECIPES[m.r]({ d: m.d ?? 0, x: m.x ?? 0, y: m.y ?? 0, a: m.a ?? 0 });

/** Shapes pivot on an absolute viewBox point, so a group of shapes moves as one rigid piece. */
function prepareNode(m: IconMotion): Prepared {
  const [x, y] = m.o ?? [12, 12];
  return { variants: variantsOf(m), style: { transformBox: "view-box", transformOrigin: `${x}px ${y}px` } };
}

/** The <svg> itself is laid out like an HTML box, so its pivot is a percentage of the icon. */
function prepareSvg(m: IconMotion): Prepared {
  const [x, y] = m.o ?? [12, 12];
  return { variants: variantsOf(m), style: { transformOrigin: `${(x / 24) * 100}% ${(y / 24) * 100}%` } };
}

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
  const svgMotion = spec.svg ? prepareSvg(spec.svg) : undefined;
  const nodes = spec.nodes.map(([tag, attrs, m]) => ({ tag, attrs, prepared: m ? prepareNode(m) : undefined }));
  const iconClass = `pulsoicon pulsoicon-${iconName}`;

  const Icon = forwardRef<IconHandle, IconProps>(({ size = 24, color = "currentColor", strokeWidth = 2, absoluteStrokeWidth, animated = true, className, style, ...rest }, ref) => {
    const controls = useAnimation();
    const svgRef = useRef<SVGSVGElement>(null);

    const start = useCallback(async () => {
      if (!prefersReducedMotion()) await controls.start("animate");
    }, [controls]);
    const stop = useCallback(async () => {
      await controls.start("normal");
    }, [controls]);

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }), [start, stop]);

    useEffect(() => {
      const svg = svgRef.current;
      if (!animated || !svg) return;
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
    }, [animated, start, stop]);

    const px = toPixels(size);
    const stroke = absoluteStrokeWidth ? (Number(strokeWidth) * 24) / px : Number(strokeWidth);

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
        {nodes.map(({ tag, attrs, prepared }, i) =>
          prepared
            ? createElement(MOTION_TAGS[tag], { key: i, ...attrs, animate: controls, initial: "normal", variants: prepared.variants, style: prepared.style })
            : createElement(tag, { key: i, ...attrs }),
        )}
      </motion.svg>
    );
  });
  Icon.displayName = displayName;
  return Icon;
}
