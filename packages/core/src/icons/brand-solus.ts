import { icon } from "../icon.js";

// Drawn after Simple Icons "solus" (CC0-1.0). Solus is a trademark of its owner.
export const BrandSolus = icon("BrandSolus", "brand-solus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M11 4.5v11H5z" }, { r: "sway", a: 5, o: [11, 16] }],
    ["path", { d: "M13 7v8.5h4.5z" }, { r: "sway", a: 5, d: 0.08, o: [13, 16] }],
    ["path", { d: "M4.5 17c3 1.5 11 1.5 15-1" }, { r: "slide", x: 1, a: 0.75 }],
  ],
});
