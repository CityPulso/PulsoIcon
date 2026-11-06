import { icon } from "../icon.js";

// Drawn after Simple Icons "kodak" (CC0-1.0). Kodak is a trademark of its owner.
export const BrandKodak = icon("BrandKodak", "brand-kodak", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2.5" }],
    ["path", { d: "M13 6.5 7.5 12l5.5 5.5" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M17 6.5v2M17 11v2M17 15.5v2" }, { r: "draw", d: 0.15 }],
  ],
});
