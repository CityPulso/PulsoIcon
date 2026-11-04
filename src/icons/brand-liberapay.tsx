import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "liberapay" (CC0-1.0). Liberapay is a trademark of its owner.

export const BrandLiberapay = createIcon("BrandLiberapay", "brand-liberapay", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M10 6.5l-1.6 9c-.2 1 .3 1.5 1.1 1.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 10.5l-1.6 9" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "16", cy: "12.8", r: "2.3" }, { r: "draw", d: 0.25 }],
  ],
});
