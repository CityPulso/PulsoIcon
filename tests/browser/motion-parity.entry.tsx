// Browser parity check: plays icons through React (pulsoicon) and through pulsoicon-core/dom, and samples both mid-motion.
import { createElement, createRef } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { ICONS } from "pulsoicon/all";
import { ICONS as DATA } from "pulsoicon-core/all";
import { playIcon } from "pulsoicon-core/dom";
import { frameMarkup, iconFrame } from "pulsoicon-core/frame";
import { ICONS as SVELTE } from "pulsoicon-svelte/all";
import { ICONS as VUE } from "pulsoicon-vue/all";
import { mount as mountSvelte } from "svelte";
import { createApp, h, ref as vueRef } from "vue";

declare global {
  interface Window {
    mount: (key: string, solid: boolean) => void;
    start: () => void;
    sample: () => Record<"react" | "core" | "vue" | "svelte", string[]>;
  }
}

let handles: { start: () => void; react: HTMLElement; core: HTMLElement; vue: HTMLElement; svelte: HTMLElement } | undefined;

window.mount = (key, solid) => {
  document.body.innerHTML = '<div id="r"></div><div id="c"></div><div id="v"></div><div id="s"></div>';
  const react = document.getElementById("r")!;
  const core = document.getElementById("c")!;
  const vue = document.getElementById("v")!;
  const svelte = document.getElementById("s")!;
  const vueIcon = vueRef<{ startAnimation: () => Promise<void> }>();
  createApp({ render: () => h(VUE[key], { ref: vueIcon, solid, autoAnimated: false }) }).mount(vue);
  const svelteIcon = mountSvelte(SVELTE[key], { target: svelte, props: { solid, autoAnimated: false } });
  const ref = createRef<{ startAnimation: () => Promise<void> }>();
  const root = createRoot(react);
  flushSync(() => root.render(createElement(ICONS[key], { ref, solid, autoAnimated: false })));
  const frame = iconFrame(DATA[key], { solid, maskId: "m" });
  core.innerHTML = frameMarkup(frame);
  const player = playIcon(core.querySelector("svg")!, frame, { autoAnimated: false });
  handles = {
    react,
    core,
    vue,
    svelte,
    start: () => {
      void ref.current!.startAnimation();
      void player.startAnimation();
      void vueIcon.value!.startAnimation();
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
window.sample = () => ({ react: read(handles!.react), core: read(handles!.core), vue: read(handles!.vue), svelte: read(handles!.svelte) });
