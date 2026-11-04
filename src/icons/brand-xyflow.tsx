import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xyflow" (CC0-1.0). xyflow is a trademark of its owner.
export const BrandXyflow = createIcon("BrandXyflow", "brand-xyflow", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "7", height: "7", rx: "2" }, { r: "press", a: 0.08, o: [6.5, 6.5] }],
    ["rect", { x: "14", y: "3", width: "7", height: "7", rx: "2" }, { r: "press", d: 0.05, a: 0.08, o: [17.5, 6.5] }],
    ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "2" }, { r: "press", d: 0.1, a: 0.08, o: [6.5, 17.5] }],
    ["rect", { x: "14", y: "14", width: "7", height: "7", rx: "2" }, { r: "press", d: 0.15, a: 0.08, o: [17.5, 17.5] }],
    ["path", { d: "M10 6.5h4M17.5 10v4M10 17.5h4" }, { r: "draw", d: 0.2, o: [12, 12] }],
  ],
});
