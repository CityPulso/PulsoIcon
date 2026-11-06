import { icon } from "../icon.js";

// Drawn after Simple Icons "glance" (CC0-1.0). Glance is a trademark of its owner.
export const BrandGlance = icon("BrandGlance", "brand-glance", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 3v18M10 12h11" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M13.5 9 17 5.5M14 5.5h3v3" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1, o: [15.5, 7.5] }],
  ],
});
