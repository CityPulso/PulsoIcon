import { icon } from "../icon.js";

export const BrandAppleFinder = icon("BrandAppleFinder", "brand-apple-finder", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12.5 2c-1.2 3-1.8 6.5-1.8 10.5H13c-.2 3 .2 6.3 1 9.5" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M7.5 8v1.5" }, { r: "blink", d: 0.15, o: [7.5, 8.75] }],
    ["path", { d: "M16.5 8v1.5" }, { r: "blink", d: 0.15, o: [16.5, 8.75] }],
    ["path", { d: "M7 15.5c3 1.8 7 1.8 10 0" }, { r: "draw", d: 0.2, o: [12, 16] }],
  ],
});
