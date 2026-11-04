import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "edgeimpulse" (CC0-1.0). Edge Impulse is a trademark of its owner.
export const BrandEdgeImpulse = createIcon("BrandEdgeImpulse", "brand-edge-impulse", {
  nodes: [
    ["circle", { cx: "5", cy: "6", r: "2" }],
    ["path", { d: "M9.5 6H19" }, { r: "growX", o: [9.5, 6] }],
    ["path", { d: "M3 12h3.5M10 12h10" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["circle", { cx: "5", cy: "18", r: "2" }],
    ["path", { d: "M9.5 18H21" }, { r: "growX", d: 0.2, o: [9.5, 18] }],
  ],
});
