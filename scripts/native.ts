/**
 * What the Kotlin and Swift generators share: each icon's two drawings as plain shapes (attributes checked, transforms
 * folded into matrices, the solid drawing resolved with pulsoicon-core's autoSolid), and the parity fixtures the native
 * unit tests compare themselves against.
 */
import type { IconData, IconMotion, IconNode, IconNodeTag, RecipeName, SolidNode, SolidRole } from "../packages/core/src/index.js";

import { RECIPE_NAMES, RECIPES, solidNodes } from "../packages/core/src/index.js";

export interface NativeShape {
  tag: IconNodeTag;
  /** Numeric geometry in the order the native builders take it. */
  numbers: number[];
  /** Path data (`path`) or point list (`polyline` / `polygon`). */
  d?: string;
  points?: number[];
  motion?: IconMotion;
  fill?: boolean;
  stroke?: boolean;
  dash?: number[];
  /** SVG matrix (a b c d e f). */
  matrix?: number[];
  role: SolidRole;
}

export interface NativeIcon {
  data: IconData;
  outline: NativeShape[];
  solid: NativeShape[];
}

const ALLOWED: Record<IconNodeTag, string[]> = {
  path: ["d"],
  circle: ["cx", "cy", "r"],
  ellipse: ["cx", "cy", "rx", "ry"],
  rect: ["x", "y", "width", "height", "rx", "ry"],
  line: ["x1", "y1", "x2", "y2"],
  polyline: ["points"],
  polygon: ["points"],
};
const PAINT = ["fill", "stroke", "strokeDasharray", "transform"];

const num = (where: string, v: string | undefined, fallback = 0): number => {
  if (v === undefined) return fallback;
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`${where}: not a number: ${v}`);
  return n;
};

const numbers = (where: string, text: string): number[] =>
  text
    .trim()
    .split(/[\s,]+/)
    .map((v) => num(where, v));

type Matrix = [number, number, number, number, number, number];
const multiply = (m: Matrix, n: Matrix): Matrix => [
  m[0] * n[0] + m[2] * n[1],
  m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3],
  m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4],
  m[1] * n[4] + m[3] * n[5] + m[5],
];

/** An SVG `transform` list as one matrix. */
export function parseTransform(where: string, text: string): number[] {
  let m: Matrix = [1, 0, 0, 1, 0, 0];
  const re = /(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g;
  let rest = text;
  for (const [whole, op, args] of text.matchAll(re)) {
    rest = rest.replace(whole, "");
    const a = numbers(where, args);
    const rad = (deg: number) => (deg * Math.PI) / 180;
    let t: Matrix;
    switch (op) {
      case "matrix":
        if (a.length !== 6) throw new Error(`${where}: matrix needs 6 numbers`);
        t = a as Matrix;
        break;
      case "translate":
        t = [1, 0, 0, 1, a[0], a[1] ?? 0];
        break;
      case "scale":
        t = [a[0], 0, 0, a[1] ?? a[0], 0, 0];
        break;
      case "rotate": {
        const [deg, cx = 0, cy = 0] = a;
        const c = Math.cos(rad(deg));
        const s = Math.sin(rad(deg));
        t = multiply(multiply([1, 0, 0, 1, cx, cy], [c, s, -s, c, 0, 0]), [1, 0, 0, 1, -cx, -cy]);
        break;
      }
      case "skewX":
        t = [1, 0, Math.tan(rad(a[0])), 1, 0, 0];
        break;
      default:
        t = [1, Math.tan(rad(a[0])), 0, 1, 0, 0];
    }
    m = multiply(m, t);
  }
  if (rest.trim()) throw new Error(`${where}: unsupported transform ${text}`);
  return m.map((v) => Number(v.toFixed(6)));
}

function shape(where: string, node: IconNode | SolidNode): NativeShape {
  const [tag, attrs, motion, role = "fill"] = node as SolidNode;
  if (!(tag in ALLOWED)) throw new Error(`${where}: unknown tag ${tag}`);
  for (const k of Object.keys(attrs)) if (!ALLOWED[tag].includes(k) && !PAINT.includes(k)) throw new Error(`${where}: unsupported attribute ${k} on ${tag}`);
  if (motion) {
    if (!RECIPE_NAMES.includes(motion.r)) throw new Error(`${where}: unknown recipe ${motion.r}`);
    for (const k of Object.keys(motion)) if (!["r", "d", "x", "y", "a", "o"].includes(k)) throw new Error(`${where}: unknown motion key ${k}`);
  }
  const paint = (k: "fill" | "stroke") => {
    const v = attrs[k];
    if (v === undefined) return undefined;
    if (v === "none") return false;
    if (v === "currentColor") return true;
    throw new Error(`${where}: ${k}=${v}`);
  };
  const out: NativeShape = { tag, numbers: [], motion, fill: paint("fill"), stroke: paint("stroke"), role };
  if (attrs.strokeDasharray) out.dash = numbers(where, attrs.strokeDasharray);
  if (attrs.transform) out.matrix = parseTransform(where, attrs.transform);
  const n = (k: string, fallback = 0) => num(`${where} ${k}`, attrs[k], fallback);
  switch (tag) {
    case "path":
      if (!attrs.d) throw new Error(`${where}: path without d`);
      out.d = attrs.d;
      break;
    case "circle":
      out.numbers = [n("cx"), n("cy"), n("r")];
      break;
    case "ellipse":
      out.numbers = [n("cx"), n("cy"), n("rx"), n("ry")];
      break;
    case "rect": {
      // SVG: a missing radius takes the other one.
      const rx = attrs.rx ?? attrs.ry;
      const ry = attrs.ry ?? attrs.rx;
      out.numbers = [n("x"), n("y"), n("width"), n("height"), num(where, rx), num(where, ry)];
      break;
    }
    case "line":
      out.numbers = [n("x1"), n("y1"), n("x2"), n("y2")];
      break;
    default:
      out.points = numbers(where, attrs.points ?? "");
      if (out.points.length < 4 || out.points.length % 2) throw new Error(`${where}: bad points`);
  }
  return out;
}

export function nativeIcon(data: IconData): NativeIcon {
  if (data.svg && !RECIPE_NAMES.includes(data.svg.r)) throw new Error(`${data.key}: unknown recipe ${data.svg.r}`);
  return {
    data,
    outline: data.nodes.map((n, i) => shape(`${data.key} node ${i}`, n)),
    solid: solidNodes(data).map((n, i) => ({ ...shape(`${data.key} solid ${i}`, n) })),
  };
}

/** Shortest decimal for a number (`2`, `0.5`, `-1.25`). */
export const decimal = (v: number): string => {
  const s = String(Number(v.toFixed(6)));
  return s === "-0" ? "0" : s;
};

/**
 * Parity fixtures, one line each, for the native unit tests:
 *   icon <key> <name> <svg recipe|-> <outline count> <solid fills> <solid cuts> <solid lines> <recipes of every outline shape>
 *   track <recipe> <d> <x> <y> <a> <prop> <duration> <delay> <x1,y1,x2,y2> <values> <times|->
 * The tracks are RECIPES from pulsoicon-core evaluated at a few parameter sets, so the hand-ported native recipes
 * are checked against the React package's.
 */
export function parityFixture(icons: NativeIcon[]): string {
  const lines: string[] = [];
  for (const { data, outline, solid } of icons) {
    const count = (role: SolidRole) => solid.filter((s) => s.role === role).length;
    const recipes = outline.map((s) => s.motion?.r ?? "-").join(",");
    lines.push(["icon", data.key, data.name, data.svg?.r ?? "-", outline.length, count("fill"), count("cut"), count("line"), recipes].join(" "));
  }
  const EASE: Record<string, number[]> = { easeInOut: [0.42, 0, 0.58, 1], easeOut: [0, 0, 0.58, 1] };
  const params = [
    [0, 0, 0, 0],
    [0.1, 1, -1, 2],
    [0.25, -1, 0, 0.5],
  ];
  for (const name of RECIPE_NAMES as RecipeName[]) {
    for (const [d, x, y, a] of params) {
      const { animate } = RECIPES[name]({ d, x, y, a });
      const { transition = {}, ...values } = animate;
      for (const [prop, keyframes] of Object.entries(values)) {
        const t = prop === "opacity" && transition.opacity ? transition.opacity : transition;
        const ease = typeof t.ease === "string" ? EASE[t.ease] : (t.ease ?? EASE.easeInOut);
        if (!ease) throw new Error(`${name}: unknown ease ${String(t.ease)}`);
        const frames = Array.isArray(keyframes) ? keyframes : [keyframes];
        lines.push(
          ["track", name, d, x, y, a, prop, t.duration ?? 0, t.delay ?? 0, ease.map(decimal).join(","), frames.map((v) => decimal(Number(v))).join(","), t.times ? t.times.map(decimal).join(",") : "-"].join(" "),
        );
      }
    }
  }
  return `${lines.join("\n")}\n`;
}
