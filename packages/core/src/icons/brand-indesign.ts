import { icon } from "../icon.js";

export const BrandIndesign = icon("BrandIndesign", "brand-indesign", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 8v8" }, { r: "grow", d: 0.05, o: [7.5, 8] }],
    ["path", { d: "M17 8v8" }, { r: "grow", d: 0.15, o: [17, 8] }],
    ["circle", { cx: "14.5", cy: "13.5", r: "2.5" }, { r: "pop", d: 0.2, o: [14.5, 13.5] }],
  ],
});
