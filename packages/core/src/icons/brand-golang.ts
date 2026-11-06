import { icon } from "../icon.js";

export const BrandGolang = icon("BrandGolang", "brand-golang", {
  nodes: [
    ["path", { d: "M1.5 9.5h4" }, { r: "growX", o: [5.5, 9.5] }],
    ["path", { d: "M2.5 12.5h3" }, { r: "growX", d: 0.05, o: [5.5, 12.5] }],
    ["path", { d: "M3.5 15.5h2" }, { r: "growX", d: 0.1, o: [5.5, 15.5] }],
    ["path", { d: "M15 8.5A5 5 0 1 0 16 13.5h-4.5" }, { r: "slide", x: 1, a: 1.5, o: [11, 12] }],
    ["circle", { cx: "19.5", cy: "12", r: "2.5" }, { r: "roll", d: 0.08, x: 1, a: 1, o: [19.5, 12] }],
  ],
});
