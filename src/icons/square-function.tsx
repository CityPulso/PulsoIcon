import { createIcon } from "../runtime/createIcon.js";

export const SquareFunction = createIcon("SquareFunction", "square-function", {
  text: true,
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }, { r: "draw", d: 0.05, o: [12, 11.979] }],
    ["path", { d: "M9 11.2h5.7" }, { r: "growX", d: 0.25, o: [11.85, 11.2] }],
  ],
});
