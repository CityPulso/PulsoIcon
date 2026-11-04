import { createIcon } from "../runtime/createIcon.js";

export const BrandAppleStocks = createIcon("BrandAppleStocks", "brand-apple-stocks", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m6 15.5 3.5-4 3 2.5L18 8" }, { r: "draw", d: 0.05, o: [12, 12] }],
  ],
});
