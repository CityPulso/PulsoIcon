import { createIcon } from "../runtime/createIcon.js";

export const CircleChevronUp = createIcon("CircleChevronUp", "circle-chevron-up", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m8 14 4-4 4 4" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 12] }],
  ],
});
