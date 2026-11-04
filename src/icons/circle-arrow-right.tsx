import { createIcon } from "../runtime/createIcon.js";

export const CircleArrowRight = createIcon("CircleArrowRight", "circle-arrow-right", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m12 16 4-4-4-4" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [12, 12] }],
  ],
});
