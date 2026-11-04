import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sabanci" (CC0-1.0). Sabanci is a trademark of its owner.
export const BrandSabanci = createIcon("BrandSabanci", "brand-sabanci", {
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10.5 9H8a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H6.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M13 15l2.5-6 2.5 6M14 13h3" }, { r: "draw", d: 0.2 }],
  ],
});
