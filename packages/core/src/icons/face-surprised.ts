import { icon } from "../icon.js";

export const FaceSurprised = icon("FaceSurprised", "face-surprised", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "pop", d: 0.05, o: [15, 9.5] }],
    ["circle", { cx: "12", cy: "16", r: "2" }, { r: "pop", d: 0.1, a: 0.35, o: [12, 16] }],
    ["path", { d: "M9 10V9" }, { r: "pop", d: 0.05, o: [9, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
