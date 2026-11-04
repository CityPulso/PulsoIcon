import { createIcon } from "../runtime/createIcon.js";

export const SquareCheck = createIcon("SquareCheck", "square-check", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m16 9-5.5 5.5L8 12" }, { r: "draw", d: 0.1, o: [12, 11.75] }],
  ],
});
