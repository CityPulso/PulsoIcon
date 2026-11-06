import { icon } from "../icon.js";

// Drawn after Simple Icons "goland" (CC0-1.0). GoLand is a trademark of its owner.
export const BrandGoland = icon("BrandGoland", "brand-goland", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }],
    ["path", { d: "M10.2 7.6A2.8 3 0 1 0 10.8 10.5H8.8" }, { r: "draw", o: [8, 10] }],
    ["ellipse", { cx: "15.3", cy: "10", rx: "2.7", ry: "3" }, { r: "draw", d: 0.12, o: [15.3, 10] }],
    ["path", { d: "M6.5 17h5" }, { r: "flicker", d: 0.25, o: [9, 17] }],
  ],
});
