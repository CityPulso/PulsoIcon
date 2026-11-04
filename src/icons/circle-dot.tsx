import { createIcon } from "../runtime/createIcon.js";

export const CircleDot = createIcon("CircleDot", "circle-dot", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", d: 0.1, a: 0.6, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
