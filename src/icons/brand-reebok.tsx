import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "reebok" (CC0-1.0). Reebok is a trademark of its owner.
export const BrandReebok = createIcon("BrandReebok", "brand-reebok", {
  nodes: [
    ["path", { d: "M2.5 8.5H10l11.5 7" }, { r: "draw" }],
    ["path", { d: "M21.5 8.5l-9 3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5.5 16l3-4.5M9.5 16l2.5-3.5" }, { r: "slide", x: -1, y: 0.6, a: 1.2, d: 0.25 }],
  ],
});
