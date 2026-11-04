import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aldisud" (CC0-1.0). Aldi Süd is a trademark of its owner.
export const BrandAldiSud = createIcon("BrandAldiSud", "brand-aldi-sud", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 13l3-6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M10 13l3-6" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M13 13l3-6" }, { r: "draw", d: 0.19 }],
    ["path", { d: "M7 17h10" }, { r: "growX", d: 0.3, o: [7, 17] }],
  ],
});
