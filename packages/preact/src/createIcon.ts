import type { FrameElement, IconData } from "pulsoicon-core";
import type { IconHandle, IconPlayer } from "pulsoicon-core/dom";
import type { JSX, VNode } from "preact";
import type { ForwardRefExoticComponent, RefAttributes } from "preact/compat";

import { iconFrame } from "pulsoicon-core";
import { playIcon } from "pulsoicon-core/dom";
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { useId, useImperativeHandle, useLayoutEffect, useMemo, useRef } from "preact/hooks";

export type { IconHandle } from "pulsoicon-core/dom";

/** Props of every icon, with the same names, defaults and meaning as the React package. Other attributes go on the <svg>. */
export interface IconProps extends Omit<JSX.IntrinsicElements["svg"], "ref" | "color" | "size" | "stroke-width" | "strokeWidth"> {
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
}

export type PulsoIcon = ForwardRefExoticComponent<IconProps & RefAttributes<IconHandle>>;

const specs = new WeakMap<object, IconData>();

/** The shapes and motions an icon was built from. */
export const iconSpec = (icon: PulsoIcon): IconData | undefined => specs.get(icon);

const render = (e: FrameElement, key?: number): VNode => h(e.tag, { key, ...e.attrs } as Record<string, unknown>, e.children.map(render));

/**
 * Builds one animated icon component (`iconName` is the kebab-case name used in the CSS class).
 * It renders the same <svg> as the React package and plays the same motion; extra attributes go on the <svg>.
 */
export function createIcon(displayName: string, iconName: string, spec: Omit<IconData, "name" | "key">): PulsoIcon {
  const data: IconData = { ...spec, name: displayName, key: iconName };
  const Icon = forwardRef<IconHandle, IconProps>((props, ref) => {
    const {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      absoluteStrokeWidth = false,
      solid = false,
      animated = true,
      autoAnimated = true,
      play,
      class: classAttr,
      className,
      style,
      ...rest
    } = props;
    const maskId = `pulsoicon${useId().replace(/[^\w-]/g, "")}`;
    const svg = useRef<SVGSVGElement>(null);
    const player = useRef<IconPlayer | undefined>(undefined);
    const options = useRef({ animated, autoAnimated });
    options.current = { animated, autoAnimated };
    const extraClass = [classAttr, className].filter((c) => typeof c === "string" && c).join(" ") || undefined;
    // Only the drawing props shape the frame: a new frame remounts the player, so play / animated must not be read here.
    const frame = useMemo(
      () => iconFrame(data, { size, color, strokeWidth, absoluteStrokeWidth, solid, className: extraClass, maskId }),
      [size, color, strokeWidth, absoluteStrokeWidth, solid, extraClass, maskId],
    );
    const handle = useMemo<IconHandle>(
      () => ({
        startAnimation: () => player.current?.startAnimation() ?? Promise.resolve(),
        stopAnimation: () => player.current?.stopAnimation() ?? Promise.resolve(),
      }),
      [],
    );
    useImperativeHandle(ref, () => handle, [handle]);

    // Layout effects, so a play change starts the motion in the same frame (Preact defers useEffect to the next one).
    // A new drawing (solid, size …) means new elements to animate.
    useLayoutEffect(() => {
      const next = svg.current ? playIcon(svg.current, frame, options.current) : undefined;
      player.current = next;
      return () => next?.destroy();
    }, [frame]);
    useLayoutEffect(() => player.current?.update({ animated, autoAnimated }), [animated, autoAnimated]);
    useLayoutEffect(() => {
      if (animated && play !== undefined) void (play ? handle.startAnimation() : handle.stopAnimation());
    }, [animated, play, handle]);

    const own = frame.attrs.style;
    // The caller's style comes after the icon's own, as `style` does in React.
    const merged =
      style === undefined || style === null
        ? own
        : typeof style === "object"
          ? { ...Object.fromEntries(own.split(";").map((p) => p.split(":") as [string, string])), ...(style as Record<string, unknown>) }
          : `${own};${style}`;
    return h("svg", { "aria-hidden": "true", ...rest, ...frame.attrs, style: merged, ref: svg }, frame.children.map(render));
  });
  Icon.displayName = displayName;
  specs.set(Icon, data);
  return Icon as PulsoIcon;
}
