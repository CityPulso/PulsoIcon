import { icon } from "../icon.js";

export const BrandIllustrator = icon("BrandIllustrator", "brand-illustrator", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 16 8.5 8l2.5 8m-4-2.5h3" }, { r: "draw", d: 0.05, o: [8.5, 12] }],
    ["path", { d: "M15.5 11.5V16" }, { r: "grow", d: 0.15, o: [15.5, 16] }],
    ["path", { d: "M15.5 8.5h.01" }, { r: "pop", d: 0.25, o: [15.5, 8.5] }],
  ],
});
