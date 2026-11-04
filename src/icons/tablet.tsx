import { createIcon } from "../runtime/createIcon.js";

export const Tablet = createIcon("Tablet", "tablet", {
  nodes: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }, { r: "turn", a: 90, o: [12, 12] }],
    ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }, { r: "flicker", d: 0.15, o: [12.005, 18] }],
  ],
});
