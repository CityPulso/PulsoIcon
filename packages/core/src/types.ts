import type { RecipeName } from "./recipes.js";

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

/** One icon: its PascalCase name, its kebab-case key, and its drawing. */
export interface IconData extends IconSpec {
  readonly name: string;
  readonly key: string;
}
