import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "processon" (CC0-1.0). ProcessOn is a trademark of its owner.
export const BrandProcesson = createIcon("BrandProcesson", "brand-processon", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["ellipse", { cx: "8.5", cy: "12", rx: "3", ry: "4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14.5 16v-5.5M14.5 13a2 2 0 0 1 4 0v3" }, { r: "draw", d: 0.3 }],
  ],
});
