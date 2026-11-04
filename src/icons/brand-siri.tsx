import { createIcon } from "../runtime/createIcon.js";

export const BrandSiri = createIcon("BrandSiri", "brand-siri", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M5 12c1.2 0 1.6-3 3.3-3 1.9 0 1.8 6 3.7 6s1.8-6 3.7-6c1.7 0 2.1 3 3.3 3" }, { r: "pulse", d: 0.05, o: [12, 12] }],
  ],
});
