import { createIcon } from "../runtime/createIcon.js";

export const BrandChrome = createIcon("BrandChrome", "brand-chrome", {
  svg: { r: "spin", a: 360 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M21.17 8H12" }],
    ["path", { d: "M3.95 6.06 8.54 14" }],
    ["path", { d: "M10.88 21.94 15.46 14" }],
  ],
});
