import type { FrameElement, IconData } from "pulsoicon-core";
import type { IconHandle, IconPlayer } from "pulsoicon-core/dom";
import type { Component, JSX } from "solid-js";

import { iconFrame } from "pulsoicon-core";
import { playIcon } from "pulsoicon-core/dom";
import { createComponent, createEffect, createMemo, createUniqueId, mergeProps, on, onCleanup, onMount, splitProps, untrack } from "solid-js";
import { Dynamic } from "solid-js/web";

export type { IconHandle } from "pulsoicon-core/dom";

/** Props of every icon, with the same names, defaults and meaning as the React package. Other attributes go on the <svg>. */
export interface IconProps extends Omit<JSX.SvgSVGAttributes<SVGSVGElement>, "ref" | "color" | "stroke-width"> {
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
  /** false: the icon never moves (the ref and `play` do nothing). Default true. */
  animated?: boolean;
  /** Play on hover / focus of the closest interactive ancestor. Default true. */
  autoAnimated?: boolean;
  /** true plays the motion, false returns to the resting frame. */
  play?: boolean;
  /** Receives the icon's `startAnimation` / `stopAnimation` (`<Bell ref={handle} />`). */
  ref?: IconHandle | ((handle: IconHandle) => void);
}

export type PulsoIcon = Component<IconProps>;

const specs = new WeakMap<object, IconData>();

/** The shapes and motions an icon was built from. */
export const iconSpec = (icon: PulsoIcon): IconData | undefined => specs.get(icon);

const ICON_PROPS = ["size", "color", "strokeWidth", "absoluteStrokeWidth", "solid", "animated", "autoAnimated", "play", "ref", "class", "style"] as const;

const render = (e: FrameElement): JSX.Element => createComponent(Dynamic, { component: e.tag, ...e.attrs, children: e.children.map(render) });

const kebab = (name: string) => (name.startsWith("--") ? name : name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

/** The frame's inline style followed by the caller's, as `style` does in React. */
function mergeStyle(own: string | undefined, extra: JSX.CSSProperties | string | undefined): string | undefined {
  if (extra === undefined) return own;
  const text =
    typeof extra === "string"
      ? extra
      : Object.entries(extra)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => `${kebab(k)}:${v}`)
          .join(";");
  return own ? `${own};${text}` : text;
}

/**
 * Builds one animated icon component (`iconName` is the kebab-case name used in the CSS class).
 * It renders the same <svg> as the React package and plays the same motion; extra attributes go on the <svg>.
 */
export function createIcon(displayName: string, iconName: string, spec: Omit<IconData, "name" | "key">): PulsoIcon {
  const data: IconData = { ...spec, name: displayName, key: iconName };
  const Icon: PulsoIcon = (input) => {
    const props = mergeProps({ size: 24, color: "currentColor", strokeWidth: 2, absoluteStrokeWidth: false, solid: false, animated: true, autoAnimated: true }, input);
    const [own, rest] = splitProps(props, ICON_PROPS);
    const maskId = `pulsoicon${createUniqueId().replace(/[^\w-]/g, "")}`;
    // Only the drawing props shape the frame: a new frame remounts the player, so play / animated must not be read here.
    const frame = createMemo(() =>
      iconFrame(data, {
        size: own.size,
        color: own.color,
        strokeWidth: own.strokeWidth,
        absoluteStrokeWidth: own.absoluteStrokeWidth,
        solid: own.solid,
        className: own.class,
        maskId,
      }),
    );
    let svg: SVGSVGElement | undefined;
    let player: IconPlayer | undefined;
    const options = () => ({ animated: own.animated, autoAnimated: own.autoAnimated });
    const handle: IconHandle = {
      startAnimation: () => player?.startAnimation() ?? Promise.resolve(),
      stopAnimation: () => player?.stopAnimation() ?? Promise.resolve(),
    };
    const ref = untrack(() => own.ref);
    if (typeof ref === "function") ref(handle);

    const mount = () => {
      player?.destroy();
      player = svg ? playIcon(svg, frame(), untrack(options)) : undefined;
    };
    onMount(() => {
      mount();
      // A new drawing (solid, size …) means new elements to animate.
      createEffect(on(frame, mount, { defer: true }));
      createEffect(on(options, (next) => player?.update(next), { defer: true }));
      createEffect(() => {
        const play = own.play;
        if (own.animated && play !== undefined) void untrack(() => (play ? handle.startAnimation() : handle.stopAnimation()));
      });
    });
    onCleanup(() => player?.destroy());

    return createComponent(
      Dynamic,
      mergeProps({ component: "svg", "aria-hidden": "true" } as const, rest, () => frame().attrs, {
        get style() {
          return mergeStyle(frame().attrs.style, own.style);
        },
        ref: (el: SVGSVGElement) => (svg = el),
        get children() {
          return frame().children.map(render);
        },
      }),
    );
  };
  specs.set(Icon, data);
  return Icon;
}
