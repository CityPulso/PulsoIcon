import { createIcon } from "../runtime/createIcon.js";

export const BrandAppleMusic = createIcon("BrandAppleMusic", "brand-apple-music", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 16V7.5l7-1.5v8.5" }, { r: "sway", a: 6, o: [12, 16] }],
    ["circle", { cx: "8.25", cy: "16", r: "1.75" }, { r: "sway", a: 6, o: [12, 16] }],
    ["circle", { cx: "15.25", cy: "14.5", r: "1.75" }, { r: "sway", a: 6, o: [12, 16] }],
  ],
});
