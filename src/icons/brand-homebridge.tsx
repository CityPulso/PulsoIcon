import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "homebridge" (CC0-1.0). Homebridge is a trademark of its owner.

export const BrandHomebridge = createIcon("BrandHomebridge", "brand-homebridge", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 11l5.5-5 5.5 5" }, { r: "draw" }],
    ["path", { d: "M8.5 14.5l3.5-3.2 3.5 3.2" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10.5 18l1.5-1.4 1.5 1.4" }, { r: "draw", d: 0.24 }],
  ],
});
