import { createIcon } from "../runtime/createIcon.js";

export const BrandSafari = createIcon("BrandSafari", "brand-safari", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "m15.5 8.5-2 5-5 2 2-5z" }, { r: "turn", a: 35, d: 0.05, o: [12, 12] }],
  ],
});
