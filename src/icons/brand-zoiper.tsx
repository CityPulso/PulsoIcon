import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zoiper" (CC0-1.0). Zoiper is a trademark of its owner.

export const BrandZoiper = createIcon("BrandZoiper", "brand-zoiper", {
  nodes: [
    ["path", { d: "M4 12a8 8 0 1 1 16 0" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "15.5", y: "11", width: "5", height: "7", rx: "2.5" }, { r: "ring", d: 0.05, a: 10, o: [18, 12] }],
    ["path", { d: "M17 17.5a5 5 0 0 1-5 3.5H8" }, { r: "draw", d: 0.15, o: [12, 20] }],
    ["path", { d: "M5.5 21h.01" }, { r: "pop", d: 0.3, o: [5.5, 21] }],
    ["path", { d: "M4 12v4" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
