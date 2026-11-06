import { icon } from "../icon.js";

export const Okrs = icon("Okrs", "okrs", {
  nodes: [
    ["circle", { cx: "9", cy: "9", r: "6" }, { r: "press", a: 0.06, o: [9, 9] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "pop", d: 0.08, a: 0.5, o: [9, 9] }],
    ["path", { d: "M15 21v-2" }, { r: "grow", d: 0.15, o: [15, 21] }],
    ["path", { d: "M18 21v-5" }, { r: "grow", d: 0.22, o: [18, 21] }],
    ["path", { d: "M21 21v-9" }, { r: "grow", d: 0.29, o: [21, 21] }],
  ],
});
