import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "geopandas" (CC0-1.0). GeoPandas is a trademark of its owner.
export const BrandGeopandas = createIcon("BrandGeopandas", "brand-geopandas", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 17v-5" }, { r: "grow", d: 0.05, o: [9, 17] }],
    ["path", { d: "M12 17V7" }, { r: "grow", d: 0.12, o: [12, 17] }],
    ["path", { d: "M15 17v-7" }, { r: "grow", d: 0.19, o: [15, 17] }],
  ],
});
