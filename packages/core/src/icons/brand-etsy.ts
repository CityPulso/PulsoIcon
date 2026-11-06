import { icon } from "../icon.js";

export const BrandEtsy = icon("BrandEtsy", "brand-etsy", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14.5 8h-5v8h5" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M9.5 12h4" }, { r: "growX", d: 0.25, o: [9.5, 12] }],
  ],
});
