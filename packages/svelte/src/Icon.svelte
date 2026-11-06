<!--
  One animated icon drawn from its data: the same <svg> as the React package, played by pulsoicon-core/dom.
  The generated components (icons/*.svelte) wrap it with their own data.
-->
<svelte:options namespace="svg" />

<script lang="ts">
  import type { FrameElement, IconData } from "pulsoicon-core";
  import type { IconPlayer } from "pulsoicon-core/dom";
  import type { IconProps } from "./types.js";

  import { iconFrame } from "pulsoicon-core";
  import { playIcon } from "pulsoicon-core/dom";
  import { untrack } from "svelte";

  let {
    data,
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    solid = false,
    animated = true,
    autoAnimated = true,
    play,
    class: className,
    style,
    ...rest
  }: IconProps & { data: IconData } = $props();

  const uid = $props.id();
  const maskId = `pulsoicon${uid.replace(/[^\w-]/g, "")}`;
  const frame = $derived(iconFrame(data, { size, color, strokeWidth, absoluteStrokeWidth, solid, className: typeof className === "string" ? className : undefined, maskId }));

  let svg: SVGSVGElement | undefined = $state();
  let player: IconPlayer | undefined;

  // A new drawing (solid, size …) means new elements to animate.
  $effect(() => {
    const current = frame;
    if (!svg) return;
    const next = playIcon(svg, current, untrack(() => ({ animated, autoAnimated })));
    player = next;
    return () => next.destroy();
  });
  $effect(() => {
    player?.update({ animated, autoAnimated });
  });
  $effect(() => {
    if (animated && play !== undefined) void (play ? player?.startAnimation() : player?.stopAnimation());
  });

  /** Plays the icon's motion (does nothing under reduced motion, or when `animated` is false); resolves when it has finished. */
  export const startAnimation = (): Promise<void> => player?.startAnimation() ?? Promise.resolve();
  /** Returns to the resting frame; resolves when it is there. */
  export const stopAnimation = (): Promise<void> => player?.stopAnimation() ?? Promise.resolve();
</script>

{#snippet node(e: FrameElement)}
  <svelte:element this={e.tag} {...e.attrs}>{#each e.children as child}{@render node(child)}{/each}</svelte:element>
{/snippet}

<svg bind:this={svg} aria-hidden="true" {...rest} {...frame.attrs} style={style ? `${frame.attrs.style};${style}` : frame.attrs.style}
  >{#each frame.children as child}{@render node(child)}{/each}</svg
>
