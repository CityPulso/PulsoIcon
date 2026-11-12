// Browser parity check: plays icons through React (pulsoicon-react), pulsoicon-core/dom, Vue, Svelte, Solid and Preact, and samples
// them mid-motion. trigger "handle" calls startAnimation(); "play" flips the play prop from false to true in React, Vue, Solid and
// Preact (Svelte and core keep the handle), which catches a component that restarts its player when play changes.
import { createElement, createRef } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { ICONS } from "pulsoicon-react/all";
import { ICONS as DATA } from "pulsoicon-core/all";
import { playIcon } from "pulsoicon-core/dom";
import { frameMarkup, iconFrame } from "pulsoicon-core/frame";
import { ICONS as SVELTE } from "pulsoicon-svelte/all";
import { ICONS as VUE } from "pulsoicon-vue/all";
import { mount as mountSvelte } from "svelte";
import { h as preactH, render as renderPreact } from "preact";
import { ICONS as PREACT } from "pulsoicon-preact/all";
import { ICONS as SOLID } from "pulsoicon-solid/all";
import { createComponent, createSignal } from "solid-js";
import { render as renderSolid } from "solid-js/web";
import { createApp, h, ref as vueRef } from "vue";

declare global {
  interface Window {
    mount: (key: string, solid: boolean, trigger: "handle" | "play") => void;
    start: () => void;
    sample: () => Record<"react" | "core" | "vue" | "svelte" | "solid" | "preact", string[]>;
  }
}

let handles: { start: () => void; react: HTMLElement; core: HTMLElement; vue: HTMLElement; svelte: HTMLElement; solid: HTMLElement; preact: HTMLElement } | undefined;
let unmountSolid = () => {};

window.mount = (key, solid, trigger) => {
  unmountSolid();
  document.body.innerHTML = '<div id="r"></div><div id="c"></div><div id="v"></div><div id="s"></div><div id="so"></div><div id="p"></div>';
  const react = document.getElementById("r")!;
  const core = document.getElementById("c")!;
  const vue = document.getElementById("v")!;
  const svelte = document.getElementById("s")!;
  const solidRoot = document.getElementById("so")!;
  const preact = document.getElementById("p")!;
  const viaPlay = trigger === "play";
  const vueIcon = vueRef<{ startAnimation: () => Promise<void> }>();
  const vuePlay = vueRef(false);
  createApp({ render: () => h(VUE[key], { ref: vueIcon, solid, autoAnimated: false, ...(viaPlay ? { play: vuePlay.value } : {}) }) }).mount(vue);
  const svelteIcon = mountSvelte(SVELTE[key], { target: svelte, props: { solid, autoAnimated: false } });
  let solidIcon: { startAnimation: () => Promise<void> } | undefined;
  const [solidPlay, setSolidPlay] = createSignal(false);
  const solidProps = { solid, autoAnimated: false, ref: (handle: { startAnimation: () => Promise<void> }) => (solidIcon = handle) };
  // A getter, so the component sees play change (spreading it into an object literal would read it once).
  if (viaPlay) Object.defineProperty(solidProps, "play", { get: solidPlay, enumerable: true });
  unmountSolid = renderSolid(() => createComponent(SOLID[key], solidProps), solidRoot);
  const preactIcon = createRef<{ startAnimation: () => Promise<void> }>();
  const renderPreactIcon = (play?: boolean) =>
    renderPreact(preactH(PREACT[key], { ref: preactIcon, solid, autoAnimated: false, ...(play === undefined ? {} : { play }) }), preact);
  renderPreactIcon(viaPlay ? false : undefined);
  const ref = createRef<{ startAnimation: () => Promise<void> }>();
  const root = createRoot(react);
  const renderReact = (play?: boolean) => root.render(createElement(ICONS[key], { ref, solid, autoAnimated: false, ...(play === undefined ? {} : { play }) }));
  flushSync(() => renderReact(viaPlay ? false : undefined));
  const frame = iconFrame(DATA[key], { solid, maskId: "m" });
  core.innerHTML = frameMarkup(frame);
  const player = playIcon(core.querySelector("svg")!, frame, { autoAnimated: false });
  handles = {
    react,
    core,
    vue,
    svelte,
    solid: solidRoot,
    preact,
    start: () => {
      if (viaPlay) {
        flushSync(() => renderReact(true));
        vuePlay.value = true;
        setSolidPlay(true);
        renderPreactIcon(true);
      } else {
        void ref.current!.startAnimation();
        void vueIcon.value!.startAnimation();
        void solidIcon!.startAnimation();
        void preactIcon.current!.startAnimation();
      }
      void player.startAnimation();
      void svelteIcon.startAnimation();
    },
  };
};
window.start = () => handles!.start();
const read = (root: HTMLElement) =>
  [...root.querySelectorAll("svg, svg *")].map((el) => {
    const s = getComputedStyle(el);
    return [el.tagName, el.namespaceURI, s.transform, s.transformOrigin, s.opacity, s.strokeDasharray, s.strokeDashoffset, el.getAttribute("stroke-dasharray") ?? "", el.getAttribute("stroke-dashoffset") ?? ""].join("|");
  });
window.sample = () => ({
  react: read(handles!.react),
  core: read(handles!.core),
  vue: read(handles!.vue),
  svelte: read(handles!.svelte),
  solid: read(handles!.solid),
  preact: read(handles!.preact),
});
