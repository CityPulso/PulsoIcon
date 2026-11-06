import { icon } from "../icon.js";

// Drawn after Simple Icons "rider" (CC0-1.0). Rider is a trademark of its owner.

export const BrandRider = icon("BrandRider", "brand-rider", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M6.5 13V6.5h2.75a1.75 1.75 0 0 1 0 3.5H6.5M9.5 10l1.5 3" }, { r: "draw" }],
    ["path", { d: "M13 6.5V13h1.75a3.25 3.25 0 0 0 0-6.5z" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M6.5 17h4.5" }, { r: "fade", d: 0.3 }],
  ],
});
