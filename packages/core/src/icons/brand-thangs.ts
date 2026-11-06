import { icon } from "../icon.js";

// Drawn after Simple Icons "thangs" (CC0-1.0). Thangs is a trademark of its owner.

export const BrandThangs = icon("BrandThangs", "brand-thangs", {
  nodes: [
    ["rect", { x: "2", y: "8", width: "20", height: "8", rx: "4" }],
    ["circle", { cx: "6.5", cy: "12", r: "1" }, { r: "pop", o: [6.5, 12] }],
    ["circle", { cx: "11", cy: "12", r: "1" }, { r: "pop", d: 0.08, o: [11, 12] }],
    ["path", { d: "M15.5 10h1.5a2 2 0 0 1 0 4h-1.5z" }, { r: "pop", d: 0.16, o: [16.5, 12] }],
  ],
});
