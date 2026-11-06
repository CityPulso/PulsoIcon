import { icon } from "../icon.js";

export const BrandZoom = icon("BrandZoom", "brand-zoom", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 9h6a2 2 0 0 1 2 2v4H8a2 2 0 0 1-2-2z" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [10, 12] }],
    ["path", { d: "M14 12l4-2.5v5z" }, { r: "pulse", d: 0.1, a: 0.15, o: [16, 12] }],
  ],
});
