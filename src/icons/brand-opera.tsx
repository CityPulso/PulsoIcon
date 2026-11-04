import { createIcon } from "../runtime/createIcon.js";

export const BrandOpera = createIcon("BrandOpera", "brand-opera", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "3.5", ry: "7" }, { r: "flip", d: 0.05, o: [12, 12] }],
  ],
});
