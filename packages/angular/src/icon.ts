import type { Signal } from "@angular/core";
import type { FrameElement, IconData } from "pulsoicon-core";
import type { IconHandle, IconPlayer } from "pulsoicon-core/dom";

import { isPlatformBrowser } from "@angular/common";
import { afterNextRender, DestroyRef, effect, inject, Injector, PLATFORM_ID, Renderer2, RendererStyleFlags2, untracked } from "@angular/core";
import { iconFrame } from "pulsoicon-core";
import { playIcon } from "pulsoicon-core/dom";

export type { IconData } from "pulsoicon-core";
export type { IconHandle } from "pulsoicon-core/dom";

/** The inputs of `<pulso-icon>` and `svg[pulsoIcon]`, with the same names, defaults and meaning as the React package's props. */
export interface IconInputs {
  icon: Signal<IconData>;
  size: Signal<number | string>;
  color: Signal<string>;
  strokeWidth: Signal<number | string>;
  absoluteStrokeWidth: Signal<boolean>;
  solid: Signal<boolean>;
  animated: Signal<boolean>;
  autoAnimated: Signal<boolean>;
  play: Signal<boolean | undefined>;
  label: Signal<string | undefined>;
}

const SVG = "svg";
let nextId = 0;

/** What one draw put on the host <svg>, so the next draw can take it off again. */
interface Drawn {
  attrs: string[];
  classes: string[];
  styles: string[];
}

const styleEntries = (style: string | undefined): [string, string][] =>
  (style ?? "")
    .split(";")
    .filter(Boolean)
    .map((part) => {
      const at = part.indexOf(":");
      return [part.slice(0, at).trim(), part.slice(at + 1).trim()];
    });

/**
 * Draws the icon's resting frame into the host <svg> with Renderer2 (so it also renders on the server) and, in the browser
 * only, plays it with pulsoicon-core/dom after the next render. Must be called in an injection context.
 */
export function drawIcon(inputs: IconInputs, host: () => SVGSVGElement | undefined): IconHandle {
  const renderer = inject(Renderer2);
  const injector = inject(Injector);
  const browser = isPlatformBrowser(inject(PLATFORM_ID));
  const maskId = `pulsoicon-ng${nextId++}`;
  let drawn: Drawn = { attrs: [], classes: [], styles: [] };
  let drawnShapes = "";
  let player: IconPlayer | undefined;
  let mounted = false;

  const handle: IconHandle = {
    startAnimation: () => player?.startAnimation() ?? Promise.resolve(),
    stopAnimation: () => player?.stopAnimation() ?? Promise.resolve(),
  };

  const create = (e: FrameElement): Element => {
    const el = renderer.createElement(e.tag, SVG) as Element;
    for (const [k, v] of Object.entries(e.attrs)) renderer.setAttribute(el, k, v);
    for (const child of e.children) renderer.appendChild(el, create(child));
    return el;
  };

  const draw = (svg: SVGSVGElement, frame: FrameElement, label: string | undefined) => {
    // Size, stroke width and label only touch the <svg>; keep the shapes' DOM unless the drawing itself changed.
    const shapes = JSON.stringify(frame.children);
    if (shapes !== drawnShapes) {
      while (svg.firstChild) renderer.removeChild(svg, svg.firstChild);
      for (const child of frame.children) renderer.appendChild(svg, create(child));
      drawnShapes = shapes;
    }
    for (const name of drawn.attrs) renderer.removeAttribute(svg, name);
    for (const name of drawn.classes) renderer.removeClass(svg, name);
    for (const name of drawn.styles) renderer.removeStyle(svg, name, RendererStyleFlags2.DashCase);
    const { class: classes = "", style, ...attrs } = frame.attrs;
    const a11y: Record<string, string> = label ? { role: "img", "aria-label": label } : { "aria-hidden": "true" };
    const all = { ...a11y, ...attrs };
    for (const [k, v] of Object.entries(all)) renderer.setAttribute(svg, k, v);
    const classList = classes.split(" ").filter(Boolean);
    for (const name of classList) renderer.addClass(svg, name);
    const styles = styleEntries(style);
    for (const [k, v] of styles) renderer.setStyle(svg, k, v, RendererStyleFlags2.DashCase);
    drawn = { attrs: Object.keys(all), classes: classList, styles: styles.map(([k]) => k) };
  };

  const options = () => ({ animated: inputs.animated(), autoAnimated: inputs.autoAnimated() });

  // Only the drawing inputs shape the frame: a new frame remounts the player, so play / animated are read untracked.
  effect(() => {
    const frame = iconFrame(inputs.icon(), {
      size: inputs.size(),
      color: inputs.color(),
      strokeWidth: inputs.strokeWidth(),
      absoluteStrokeWidth: inputs.absoluteStrokeWidth(),
      solid: inputs.solid(),
      maskId,
    });
    const label = inputs.label();
    const svg = host();
    if (!svg) return;
    untracked(() => draw(svg, frame, label));
    if (!browser) return;
    // A new drawing (solid, size …) means new elements to animate.
    afterNextRender(
      () => {
        player?.destroy();
        player = playIcon(svg, frame, untracked(options));
        if (mounted) return;
        mounted = true;
        const play = untracked(inputs.play);
        if (untracked(inputs.animated) && play !== undefined) void (play ? handle.startAnimation() : handle.stopAnimation());
      },
      { injector },
    );
  });
  effect(() => {
    const next = options();
    untracked(() => player?.update(next));
  });
  effect(() => {
    const play = inputs.play();
    const animated = inputs.animated();
    if (animated && play !== undefined && mounted) untracked(() => void (play ? handle.startAnimation() : handle.stopAnimation()));
  });
  inject(DestroyRef).onDestroy(() => player?.destroy());
  return handle;
}
