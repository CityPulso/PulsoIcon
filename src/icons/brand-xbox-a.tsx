import { createIcon } from "../runtime/createIcon.js";

export const BrandXboxA = createIcon("BrandXboxA", "brand-xbox-a", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M8.5 16.5 12 7.5l3.5 9M9.7 13.5h4.6" }, { r: "press", a: 0.12, d: 0.03, o: [12, 12] }],
  ],
});
