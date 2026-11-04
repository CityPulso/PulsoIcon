import { createIcon } from "../runtime/createIcon.js";

export const BrandXboxX = createIcon("BrandXboxX", "brand-xbox-x", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "m8.5 8.5 7 7M15.5 8.5l-7 7" }, { r: "press", a: 0.12, d: 0.03, o: [12, 12] }],
  ],
});
