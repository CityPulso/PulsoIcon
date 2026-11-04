import { createIcon } from "../runtime/createIcon.js";

export const BrandLightroom = createIcon("BrandLightroom", "brand-lightroom", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 8v8h3.5" }, { r: "draw", d: 0.05, o: [8.75, 12] }],
    ["path", { d: "M13.5 16v-5.5m0 2.5a2.5 2.5 0 0 1 3-2.4" }, { r: "draw", d: 0.15, o: [15, 13] }],
  ],
});
