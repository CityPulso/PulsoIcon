import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cesium" (CC0-1.0). Cesium is a trademark of its owner.
export const BrandCesium = createIcon("BrandCesium", "brand-cesium", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M2.5 14c1.5 0 2.5-3.5 5-3.5s3 5 5.5 5 2.5-4 5-4c1.5 0 2.5 1 3.5 2" }, { r: "draw" }],
    ["path", { d: "M16 7.5h.01" }, { r: "pop", d: 0.35, o: [16, 7.5] }],
  ],
});
