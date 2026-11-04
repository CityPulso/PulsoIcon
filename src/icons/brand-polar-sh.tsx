import { createIcon } from "../runtime/createIcon.js";

export const BrandPolarSh = createIcon("BrandPolarSh", "brand-polar-sh", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "5", ry: "10" }, { r: "flip", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 2v20" }, { r: "flip", d: 0.05, o: [12, 12] }],
  ],
});
