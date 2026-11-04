import { createIcon } from "../runtime/createIcon.js";

export const SquareDot = createIcon("SquareDot", "square-dot", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", d: 0.1, a: 0.6, o: [12, 12] }],
  ],
});
