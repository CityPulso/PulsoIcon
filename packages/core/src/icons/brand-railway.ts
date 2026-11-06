import { icon } from "../icon.js";

export const BrandRailway = icon("BrandRailway", "brand-railway", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2.5 9h10" }, { r: "slide", d: 0.05, x: 1, a: 2, o: [7.5, 9] }],
    ["path", { d: "M2 12h12" }, { r: "slide", d: 0.12, x: 1, a: 2, o: [8, 12] }],
    ["path", { d: "M2.5 15h10" }, { r: "slide", d: 0.19, x: 1, a: 2, o: [7.5, 15] }],
  ],
});
