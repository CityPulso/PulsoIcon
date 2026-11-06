import { icon } from "../icon.js";

// Drawn after Simple Icons "coppel" (CC0-1.0). Coppel is a trademark of its owner.
export const BrandCoppel = icon("BrandCoppel", "brand-coppel", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "3" }],
    ["circle", { cx: "8", cy: "12", r: "2" }, { r: "slide", x: 1, o: [12, 12] }],
    ["path", { d: "M10 12h8v2.5M15.5 12v2" }, { r: "slide", x: 1, o: [12, 12] }],
  ],
});
