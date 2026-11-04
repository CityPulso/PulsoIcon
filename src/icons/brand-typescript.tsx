import { createIcon } from "../runtime/createIcon.js";

export const BrandTypescript = createIcon("BrandTypescript", "brand-typescript", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 10h5" }, { r: "growX", d: 0.05, o: [6, 10] }],
    ["path", { d: "M8.5 10v7" }, { r: "grow", d: 0.1, o: [8.5, 10] }],
    ["path", { d: "M17.5 10.8a1.8 1.8 0 0 0-1.7-.8c-1 0-1.8.6-1.8 1.4 0 2 3.5 1.2 3.5 3.3 0 .9-.8 1.5-1.8 1.5a2 2 0 0 1-1.9-1" }, { r: "draw", d: 0.15, o: [15.8, 13] }],
  ],
});
