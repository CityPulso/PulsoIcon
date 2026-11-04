import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "optimism" (CC0-1.0). Optimism is a trademark of its owner.
export const BrandOptimism = createIcon("BrandOptimism", "brand-optimism", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["ellipse", { cx: "8.75", cy: "12", rx: "2.25", ry: "3" }, { r: "draw", d: 0.05, o: [8.75, 12] }],
    ["path", { d: "M13.5 15V9h2.25a1.75 1.75 0 0 1 0 3.5H13.5" }, { r: "draw", d: 0.2, o: [15, 12] }],
  ],
});
