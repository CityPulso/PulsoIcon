import { createIcon } from "../runtime/createIcon.js";

export const BrandBlogger = createIcon("BrandBlogger", "brand-blogger", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 9.5h4" }, { r: "growX", d: 0.05, o: [8, 9.5] }],
    ["path", { d: "M8 14.5h8" }, { r: "growX", d: 0.15, o: [8, 14.5] }],
  ],
});
