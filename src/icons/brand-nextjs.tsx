import { createIcon } from "../runtime/createIcon.js";

export const BrandNextjs = createIcon("BrandNextjs", "brand-nextjs", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 16V8l7.5 9.5" }, { r: "draw", d: 0.05, o: [12.5, 12.5] }],
    ["path", { d: "M15 8v5" }, { r: "grow", d: 0.25, o: [15, 8] }],
  ],
});
