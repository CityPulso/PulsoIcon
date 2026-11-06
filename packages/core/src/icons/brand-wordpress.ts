import { icon } from "../icon.js";

export const BrandWordpress = icon("BrandWordpress", "brand-wordpress", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M5.5 8.5 9.5 19l2.5-7 2.5 7 4-10.5" }, { r: "draw", d: 0.1, o: [12, 13.75] }],
    ["path", { d: "M4.5 8.5h3.5" }, { r: "growX", d: 0.3, o: [4.5, 8.5] }],
    ["path", { d: "M11 8.5h3.5" }, { r: "growX", d: 0.35, o: [11, 8.5] }],
  ],
});
