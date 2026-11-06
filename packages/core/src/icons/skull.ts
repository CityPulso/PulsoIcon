import { icon } from "../icon.js";

export const Skull = icon("Skull", "skull", {
  nodes: [
    ["path", { d: "m12.5 17-.5-1-.5 1h1z" }, { r: "pop", d: 0.2, o: [12, 16.5] }],
    ["path", { d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" }, { r: "wobble", a: 5, o: [12, 20] }],
    ["circle", { cx: "15", cy: "12", r: "1" }, { r: "blink", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "9", cy: "12", r: "1" }, { r: "blink", d: 0.1, o: [12, 12] }],
  ],
});
