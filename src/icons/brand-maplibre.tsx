import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "maplibre" (CC0-1.0). MapLibre is a trademark of its owner.
export const BrandMaplibre = createIcon("BrandMaplibre", "brand-maplibre", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M12 15s-3.5-3.5-3.5-6a3.5 3.5 0 0 1 7 0c0 2.5-3.5 6-3.5 6z" }, { r: "bounce", x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M10 18.5h4" }, { r: "growX", d: 0.1, o: [12, 18.5] }],
  ],
});
