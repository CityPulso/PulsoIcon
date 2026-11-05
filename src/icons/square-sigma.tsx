import { createIcon } from "../runtime/createIcon.js";

export const SquareSigma = createIcon("SquareSigma", "square-sigma", {
  text: true,
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }, { r: "redraw", d: 0.05, o: [12, 12] }],
  ],
});
