import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gdal" (CC0-1.0). GDAL is a trademark of its owner.
export const BrandGdal = createIcon("BrandGdal", "brand-gdal", {
  nodes: [
    ["circle", { cx: "14", cy: "14", r: "7" }, { r: "press", a: 0.04, o: [14, 14] }],
    ["path", { d: "M7 14h14M14 7c-2 2-3 4.5-3 7s1 5 3 7c2-2 3-4.5 3-7s-1-5-3-7" }, { r: "turn", a: 15, o: [14, 14] }],
    ["path", { d: "M5.5 2.5 8.5 5.5 5.5 8.5 2.5 5.5z" }, { r: "float", d: 0.1, a: 1, o: [5.5, 5.5] }],
  ],
});
