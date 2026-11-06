import type { FrameElement, IconData } from "pulsoicon-core";
import type { IconHandle, IconPlayer } from "pulsoicon-core/dom";
import type { DefineComponent, PropType, VNode } from "vue";

import { iconFrame } from "pulsoicon-core";
import { playIcon } from "pulsoicon-core/dom";
import { computed, defineComponent, h, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";

export type { IconHandle } from "pulsoicon-core/dom";

/** Props of every icon, with the same names, defaults and meaning as the React package. */
export interface IconProps {
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

export type PulsoIcon = DefineComponent<IconProps>;

const specs = new WeakMap<object, IconData>();

/** The shapes and motions an icon was built from. */
export const iconSpec = (icon: PulsoIcon): IconData | undefined => specs.get(icon);

const render = (e: FrameElement): VNode => h(e.tag, e.attrs, e.children.map(render));

/**
 * Builds one animated icon component (`iconName` is the kebab-case name used in the CSS class).
 * It renders the same <svg> as the React package and plays the same motion; extra attributes go on the <svg>.
 */
export function createIcon(displayName: string, iconName: string, spec: Omit<IconData, "name" | "key">): PulsoIcon {
  const data: IconData = { ...spec, name: displayName, key: iconName };
  const Icon = defineComponent({
    name: displayName,
    inheritAttrs: false,
    props: {
      size: { type: [Number, String] as PropType<number | string>, default: 24 },
      color: { type: String, default: "currentColor" },
      strokeWidth: { type: [Number, String] as PropType<number | string>, default: 2 },
      absoluteStrokeWidth: { type: Boolean, default: false },
      solid: { type: Boolean, default: false },
      animated: { type: Boolean, default: true },
      autoAnimated: { type: Boolean, default: true },
      play: { type: Boolean, default: undefined },
    },
    setup(props, { attrs, expose }) {
      const maskId = `pulsoicon${useId().replace(/[^\w-]/g, "")}`;
      const svg = ref<SVGSVGElement>();
      // Only the drawing props shape the frame: a new frame remounts the player, so play / animated must not be read here
      // (a play change would otherwise stop the motion it has just started).
      const frame = computed(() =>
        iconFrame(data, { size: props.size, color: props.color, strokeWidth: props.strokeWidth, absoluteStrokeWidth: props.absoluteStrokeWidth, solid: props.solid, maskId }),
      );
      let player: IconPlayer | undefined;
      const options = () => ({ animated: props.animated, autoAnimated: props.autoAnimated });
      const handle: IconHandle = {
        startAnimation: () => player?.startAnimation() ?? Promise.resolve(),
        stopAnimation: () => player?.stopAnimation() ?? Promise.resolve(),
      };
      expose(handle);

      const mount = () => {
        player?.destroy();
        player = svg.value ? playIcon(svg.value, frame.value, options()) : undefined;
      };
      onMounted(() => {
        mount();
        if (props.animated && props.play !== undefined) void (props.play ? handle.startAnimation() : handle.stopAnimation());
      });
      onBeforeUnmount(() => player?.destroy());
      // A new drawing (solid, size …) means new elements to animate.
      watch(frame, mount, { flush: "post" });
      watch(options, (next) => player?.update(next));
      watch(
        () => props.play,
        (play) => {
          if (props.animated && play !== undefined) void (play ? handle.startAnimation() : handle.stopAnimation());
        },
      );

      return () => {
        // The parent's class and style come after the icon's own, as className / style do in React.
        const { class: className, style, ...rest } = attrs;
        const root = frame.value;
        return h(
          root.tag,
          { "aria-hidden": "true", ...rest, ...root.attrs, class: className ? [root.attrs.class, className] : root.attrs.class, style: style ? [root.attrs.style, style] : root.attrs.style, ref: svg },
          root.children.map(render),
        );
      };
    },
  });
  specs.set(Icon, data);
  return Icon as unknown as PulsoIcon;
}
