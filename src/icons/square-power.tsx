import { createIcon } from "../runtime/createIcon.js";

export const SquarePower = createIcon("SquarePower", "square-power", {
  nodes: [
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.2, o: [12, 11] }],
    ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }, { r: "redraw", d: 0.05, o: [12, 12.999] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
