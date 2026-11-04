import { createIcon } from "../runtime/createIcon.js";

export const Spline = createIcon("Spline", "spline", {
  nodes: [
    ["circle", { cx: "19", cy: "5", r: "2" }, { r: "pop", d: 0.2, o: [19, 5] }],
    ["circle", { cx: "5", cy: "19", r: "2" }, { r: "pop", d: 0.05, o: [5, 19] }],
    ["path", { d: "M5 17A12 12 0 0 1 17 5" }, { r: "redraw", o: [11, 11] }],
  ],
});
