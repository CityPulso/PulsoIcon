import type { HTMLAttributes } from "astro/types";

export type { IconHandle } from "pulsoicon-core/dom";

/** Props of every icon, with the same names, defaults and meaning as the React package. Other attributes go on the <svg>. */
export interface IconProps extends Omit<HTMLAttributes<"svg">, "color" | "stroke-width"> {
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
  /** false: the icon never moves. Default true. */
  animated?: boolean;
  /** Play on hover / focus of the closest interactive ancestor. Default true. */
  autoAnimated?: boolean;
}

/** One icon component. In the browser, `getIconHandle(svg)` from `pulsoicon-astro/client` plays it from your own script. */
export type PulsoIcon = (props: IconProps) => unknown;
