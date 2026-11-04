import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lotpolishairlines" (CC0-1.0). LOT Polish Airlines is a trademark of its owner.

export const BrandLotPolishAirlines = createIcon("BrandLotPolishAirlines", "brand-lot-polish-airlines", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3.5 12H11l5.5 1.5 3 3.5" }, { r: "float", d: 0.05, a: 1 }],
    ["path", { d: "M11 12l5.5-7.5" }, { r: "swing", d: 0.1, a: -14, o: [11, 12] }],
    ["path", { d: "M13 12.5 13.5 7" }, { r: "swing", d: 0.15, a: -10, o: [13, 12.5] }],
  ],
});
