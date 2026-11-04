import { createIcon } from "../runtime/createIcon.js";

export const BrandAppleNews = createIcon("BrandAppleNews", "brand-apple-news", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 17V7l10 10V7" }, { r: "draw", d: 0.05, o: [12, 12] }],
  ],
});
