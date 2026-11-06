import { icon } from "../icon.js";

// Drawn after Simple Icons "wearos" (CC0-1.0). Wear OS is a trademark of its owner.
export const BrandWearOs = icon("BrandWearOs", "brand-wear-os", {
  nodes: [
    ["path", { d: "M3.5 5l4.5 14" }, { r: "draw" }],
    ["path", { d: "M10 5l4.5 14" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "17.5", cy: "11", r: "1.5" }, { r: "pop", d: 0.25, o: [17.5, 11] }],
    ["path", { d: "M20.5 6h.01" }, { r: "pop", d: 0.35, o: [20.5, 6] }],
  ],
});
