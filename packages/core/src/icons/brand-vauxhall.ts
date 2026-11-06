import { icon } from "../icon.js";

// Drawn after Simple Icons "vauxhall" (CC0-1.0). Vauxhall is a trademark of its owner.

export const BrandVauxhall = icon("BrandVauxhall", "brand-vauxhall", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M5 9l2 4.5L9 9" }, { r: "draw", d: 0.1, o: [7, 11] }],
    ["path", { d: "M10.5 20.5c0-3.5 1.5-6 3.5-7.5-.5-1.5 0-3.5 1.5-4.5l3 .5-1 1.5c1.5 1.5 2 3.5 1 6" }, { r: "tilt", d: 0.1, a: 6, o: [14, 20] }],
  ],
});
