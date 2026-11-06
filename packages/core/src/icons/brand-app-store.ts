import { icon } from "../icon.js";

export const BrandAppStore = icon("BrandAppStore", "brand-app-store", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m7.5 16.5 5-8.5" }, { r: "draw", d: 0.05, o: [10, 12.5] }],
    ["path", { d: "m11.5 8 5 8.5" }, { r: "draw", d: 0.12, o: [14, 12.5] }],
    ["path", { d: "M6.5 14h11" }, { r: "draw", d: 0.19, o: [12, 14] }],
  ],
});
