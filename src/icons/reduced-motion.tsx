import { createIcon } from "../runtime/createIcon.js";

export const ReducedMotion = createIcon("ReducedMotion", "reduced-motion", {
  nodes: [
    ["circle", { cx: "15", cy: "12", r: "5" }, { r: "press", a: 0.06, o: [15, 12] }],
    ["path", { d: "M2 9h4" }, { r: "fade", d: 0.05, o: [4, 9] }],
    ["path", { d: "M3 12h4" }, { r: "fade", d: 0.1, o: [5, 12] }],
    ["path", { d: "M2 15h4" }, { r: "fade", d: 0.15, o: [4, 15] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.2, o: [12, 12] }],
  ],
});
