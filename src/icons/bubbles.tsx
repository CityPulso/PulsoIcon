import { createIcon } from "../runtime/createIcon.js";

export const Bubbles = createIcon("Bubbles", "bubbles", {
  nodes: [
    ["path", { d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5" }, { r: "draw", d: 0.25, o: [8.001, 15.75] }],
    ["circle", { cx: "18.5", cy: "8.5", r: "3.5" }, { r: "float", d: 0.1, a: 1.5, o: [18.5, 8.5] }],
    ["circle", { cx: "7.5", cy: "16.5", r: "5.5" }, { r: "float", d: 0.2, a: 1, o: [7.5, 16.5] }],
    ["circle", { cx: "7.5", cy: "4.5", r: "2.5" }, { r: "float", a: 2, o: [7.5, 4.5] }],
  ],
});
