import { icon } from "../icon.js";

// Drawn after Simple Icons "wheniwork" (CC0-1.0). When I Work is a trademark of its owner.
export const BrandWhenIWork = icon("BrandWhenIWork", "brand-when-i-work", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 8.5h6" }, { r: "growX", o: [8, 8.5] }],
    ["path", { d: "M7.5 12h9" }, { r: "growX", d: 0.1, o: [7.5, 12] }],
    ["path", { d: "M10 15.5h6.5" }, { r: "growX", d: 0.2, o: [10, 15.5] }],
  ],
});
