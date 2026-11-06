import { icon } from "../icon.js";

// Drawn after Simple Icons "changedetection" (CC0-1.0). Change Detection is a trademark of its owner.
export const BrandChangeDetection = icon("BrandChangeDetection", "brand-change-detection", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M6 9h2.5l5 6H17" }, { r: "draw" }],
    ["path", { d: "M6 15h2.5l5-6H17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15.5 7.5 17 9l-1.5 1.5M15.5 13.5 17 15l-1.5 1.5" }, { r: "pop", d: 0.4, o: [16.5, 12] }],
  ],
});
