/**
 * Motion vocabulary for PulsoIcon. Each recipe animates one SVG element (or the whole <svg>)
 * from lucide's resting geometry and back; the resting frame (`normal`) never changes the shape.
 *
 * Units: translations are viewBox units (the icon is 24×24), angles are degrees, `d` is a delay in seconds.
 */
export interface RecipeParams {
  /** Delay before this element starts, seconds. */
  d: number;
  /** Direction for slide / shoot / bounce: unit-ish vector in viewBox units. */
  x: number;
  y: number;
  /** Amplitude (degrees for rotations, scale delta for scales, units for moves). */
  a: number;
}

/** Values a recipe animates (transform values in viewBox units / degrees, path drawing as a 0–1 fraction). */
export type AnimatedValue = "pathLength" | "pathOffset" | "opacity" | "x" | "y" | "rotate" | "scale" | "scaleX" | "scaleY" | "skewY";

/** A timing curve: a named CSS easing or a cubic-bezier. */
export type Ease = "easeInOut" | "easeOut" | [number, number, number, number];

/** Timing of one state change, in the shape motion expects. Seconds; `times` spread the keyframes (0–1). */
export interface Transition {
  duration?: number;
  delay?: number;
  ease?: Ease;
  times?: number[];
  /** Own timing for the opacity keyframes (the quick fade-in of a stroke that draws on). */
  opacity?: Transition;
}

/** One state of a shape: each value as a target or as keyframes, plus its timing. */
export type RecipeState = { [V in AnimatedValue]?: number | number[] } & { transition?: Transition };

/** The resting (`normal`) and playing (`animate`) states; the index signature keeps it assignable to motion's `Variants`. */
export interface RecipeVariants {
  [state: string]: RecipeState;
  normal: RecipeState;
  animate: RecipeState;
}

/** Builds the resting (`normal`) and playing (`animate`) states of one shape. */
export type Recipe = (p: RecipeParams) => RecipeVariants;

/** Every motion a shape can play. */
export type RecipeName =
  | "draw"
  | "redraw"
  | "pop"
  | "press"
  | "spin"
  | "turn"
  | "ring"
  | "beat"
  | "pulse"
  | "slide"
  | "shoot"
  | "bounce"
  | "shake"
  | "tilt"
  | "swing"
  | "lift"
  | "blink"
  | "flip"
  | "open"
  | "fold"
  | "fade"
  | "twinkle"
  | "float"
  | "grow"
  | "drop"
  | "rise"
  | "stamp"
  | "jelly"
  | "roll"
  | "sway"
  | "flicker"
  | "wobble"
  | "growX"
  | "drawBack"
  | "drawOut";

const back: Transition = { duration: 0.25, ease: "easeOut" };

const at = (p: RecipeParams, duration: number, extra: Transition = {}): Transition => ({ duration, delay: p.d, ease: "easeInOut", ...extra });

const transformRest = { x: 0, y: 0, rotate: 0, scale: 1, scaleX: 1, scaleY: 1, skewY: 0, opacity: 1, transition: back };

export const RECIPES: Record<RecipeName, Recipe> = {
  /** Stroke draws itself on. */
  draw: (p) => ({
    normal: { pathLength: 1, opacity: 1, transition: back },
    animate: { pathLength: [0, 1], opacity: [0, 1], transition: at(p, 0.55, { opacity: { duration: 0.1, delay: p.d } }) },
  }),
  /** Stroke draws itself on from its end back to its start (a shaft whose path begins at the arrowhead). */
  drawBack: (p) => ({
    normal: { pathLength: 1, pathOffset: 0, opacity: 1, transition: back },
    animate: { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1], transition: at(p, 0.55, { opacity: { duration: 0.1, delay: p.d } }) },
  }),
  /** Stroke grows from its middle towards both ends (a shaft with an arrowhead at each end). */
  drawOut: (p) => ({
    normal: { pathLength: 1, pathOffset: 0, opacity: 1, transition: back },
    animate: { pathLength: [0, 1], pathOffset: [0.5, 0], opacity: [0, 1], transition: at(p, 0.55, { opacity: { duration: 0.1, delay: p.d } }) },
  }),
  /** Stroke erases and redraws from the other end. */
  redraw: (p) => ({
    normal: { pathLength: 1, pathOffset: 0, transition: back },
    animate: { pathLength: [1, 0, 1], pathOffset: [0, 1, 0], transition: at(p, 0.7) },
  }),
  /** Grows from nothing with a small overshoot (dots, badges, details). */
  pop: (p) => ({
    normal: transformRest,
    animate: { scale: [0, 1 + (p.a || 0.25), 1], opacity: [0, 1, 1], transition: at(p, 0.45) },
  }),
  /** Quick squash and spring back. */
  press: (p) => ({
    normal: transformRest,
    animate: { scale: [1, 1 - (p.a || 0.15), 1.05, 1], transition: at(p, 0.4) },
  }),
  /** Full turn about the origin. */
  spin: (p) => ({
    normal: { rotate: 0, transition: { duration: 0 } },
    animate: { rotate: [0, p.a || 360], transition: at(p, 0.8) },
  }),
  /** Partial turn and back (dials, gauges, hands). */
  turn: (p) => ({
    normal: transformRest,
    animate: { rotate: [0, p.a || 90, 0], transition: at(p, 0.7) },
  }),
  /** Bell-like wiggle about the origin. */
  ring: (p) => {
    const a = p.a || 14;
    return { normal: transformRest, animate: { rotate: [0, -a, a * 0.85, -a * 0.55, a * 0.3, 0], transition: at(p, 0.7) } };
  },
  /** Heartbeat. */
  beat: (p) => {
    const a = p.a || 0.16;
    return { normal: transformRest, animate: { scale: [1, 1 + a, 1 - a * 0.3, 1 + a * 0.6, 1], transition: at(p, 0.65) } };
  },
  /** Gentle breathing pulse. */
  pulse: (p) => ({
    normal: transformRest,
    animate: { scale: [1, 1 + (p.a || 0.08), 1], transition: at(p, 0.6) },
  }),
  /** Nudge along (x, y) and come back. */
  slide: (p) => ({
    normal: transformRest,
    animate: { x: [0, p.x * (p.a || 2.5), 0], y: [0, p.y * (p.a || 2.5), 0], transition: at(p, 0.5) },
  }),
  /** Leave along (x, y), re-enter from the opposite side. */
  shoot: (p) => {
    const a = p.a || 7;
    return {
      normal: transformRest,
      animate: {
        x: [0, p.x * a, -p.x * a, 0],
        y: [0, p.y * a, -p.y * a, 0],
        opacity: [1, 0, 0, 1],
        transition: at(p, 0.6, { times: [0, 0.4, 0.41, 1] }),
      },
    };
  },
  /** Hop along (x, y) twice, decaying. */
  bounce: (p) => {
    const a = p.a || 3;
    return {
      normal: transformRest,
      animate: { x: [0, p.x * a, 0, p.x * a * 0.4, 0], y: [0, p.y * a, 0, p.y * a * 0.4, 0], transition: at(p, 0.6) },
    };
  },
  /** Side-to-side shake (errors, deletes). */
  shake: (p) => {
    const a = p.a || 1.5;
    return { normal: transformRest, animate: { x: [0, -a, a, -a * 0.6, a * 0.6, 0], transition: at(p, 0.5) } };
  },
  /** Writing / brushing tilt about the origin. */
  tilt: (p) => {
    const a = p.a || 12;
    return { normal: transformRest, animate: { rotate: [0, -a, a * 0.6, -a * 0.3, 0], transition: at(p, 0.7) } };
  },
  /** Pendulum swing about the origin (flags, tags, signs). */
  swing: (p) => {
    const a = p.a || 10;
    return { normal: transformRest, animate: { rotate: [0, a, -a * 0.75, a * 0.4, 0], transition: at(p, 0.8) } };
  },
  /** Lid lift: rises along (x, y) and tilts by `a`. */
  lift: (p) => ({
    normal: transformRest,
    animate: { x: [0, p.x * 2.5, 0], y: [0, (p.y || -1) * 2.5, 0], rotate: [0, p.a, 0], transition: at(p, 0.55) },
  }),
  /** Eye blink / shutter: squash vertically. */
  blink: (p) => ({
    normal: transformRest,
    animate: { scaleY: [1, 0.1, 1], transition: at(p, 0.35) },
  }),
  /** Flip around the vertical axis (cards, pages, coins). */
  flip: (p) => ({
    normal: transformRest,
    animate: { scaleX: [1, -1, 1], transition: at(p, 0.6) },
  }),
  /** Swing open on a hinge at the origin and shut again (covers, doors): narrows towards the hinge with a slight perspective tilt. */
  open: (p) => ({
    normal: transformRest,
    animate: { scaleX: [1, 1 - (p.a || 0.35), 1], skewY: [0, -(p.y || 6), 0], transition: at(p, 0.6) },
  }),
  /** Fold vertically (pages, calendars). */
  fold: (p) => ({
    normal: transformRest,
    animate: { scaleY: [1, -1, 1], transition: at(p, 0.6) },
  }),
  /** Fade out and back. */
  fade: (p) => ({
    normal: transformRest,
    animate: { opacity: [1, 0.15, 1], transition: at(p, 0.5) },
  }),
  /** Star / gem sparkle: small rotation with a squeeze. */
  twinkle: (p) => {
    const a = p.a || 18;
    return { normal: transformRest, animate: { rotate: [0, -a, a, 0], scale: [1, 0.85, 1.1, 1], transition: at(p, 0.7) } };
  },
  /** Float up and settle. */
  float: (p) => ({
    normal: transformRest,
    animate: { y: [0, -(p.a || 1.5), 0], transition: at(p, 0.6) },
  }),
  /** Grow from the origin along Y (bars, levels). */
  grow: (p) => ({
    normal: transformRest,
    animate: { scaleY: [0, 1], transition: at(p, 0.45) },
  }),
  /** Fall in from (x, y) × a above its place and land. */
  drop: (p) => {
    const a = p.a || 6;
    return {
      normal: transformRest,
      animate: { x: [p.x * a, 0], y: [(p.y || -1) * a, 0], opacity: [0, 1], transition: at(p, 0.45, { ease: [0.34, 1.56, 0.64, 1] }) },
    };
  },
  /** Come up from `a` units below its place (suns, heads, scenery). */
  rise: (p) => ({
    normal: transformRest,
    animate: { y: [p.a || 3, 0], opacity: [0, 1], transition: at(p, 0.5, { ease: [0.22, 1, 0.36, 1] }) },
  }),
  /** Stamp down from larger and settle. */
  stamp: (p) => ({
    normal: transformRest,
    animate: { scale: [1 + (p.a || 0.6), 0.92, 1], opacity: [0, 1, 1], transition: at(p, 0.45) },
  }),
  /** Jelly squish: alternate scaleX / scaleY. */
  jelly: (p) => {
    const a = p.a || 0.18;
    return { normal: transformRest, animate: { scaleX: [1, 1 + a, 1 - a * 0.6, 1 + a * 0.3, 1], scaleY: [1, 1 - a, 1 + a * 0.6, 1 - a * 0.3, 1], transition: at(p, 0.7) } };
  },
  /** Roll along x while turning (wheels, balls). */
  roll: (p) => {
    const a = p.a || 3;
    const dir = p.x || 1;
    return { normal: transformRest, animate: { x: [0, dir * a, 0], rotate: [0, dir * 180, 360 * dir], transition: at(p, 0.8) } };
  },
  /** Slow side-to-side sway (plants, flames, liquids). */
  sway: (p) => {
    const a = p.a || 6;
    return { normal: transformRest, animate: { rotate: [0, a, -a, a * 0.5, 0], transition: at(p, 1) } };
  },
  /** Flicker like a light. */
  flicker: (p) => ({
    normal: transformRest,
    animate: { opacity: [1, 0.3, 1, 0.5, 1], transition: at(p, 0.6, { times: [0, 0.2, 0.4, 0.6, 1] }) },
  }),
  /** Wobble: small rotation with a scale bump. */
  wobble: (p) => {
    const a = p.a || 8;
    return { normal: transformRest, animate: { rotate: [0, -a, a, 0], scale: [1, 1.08, 1.08, 1], transition: at(p, 0.6) } };
  },
  /** Grow from the origin along X (progress, text lines). */
  growX: (p) => ({
    normal: transformRest,
    animate: { scaleX: [0, 1], transition: at(p, 0.45) },
  }),
};

export const RECIPE_NAMES = Object.keys(RECIPES) as RecipeName[];
