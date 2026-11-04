import { createIcon } from "../runtime/createIcon.js";

export const BrandVue = createIcon("BrandVue", "brand-vue", {
  nodes: [
    ["path", { d: "M2 3.5h4L12 14l6-10.5h4L12 20.5z" }, { r: "press", a: 0.05, o: [12, 20.5] }],
    ["path", { d: "M6 3.5h3.5L12 8l2.5-4.5H18" }, { r: "draw", d: 0.1, o: [12, 5.5] }],
  ],
});
