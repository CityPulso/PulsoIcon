import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fubo" (CC0-1.0). Fubo is a trademark of its owner.
export const BrandFubo = createIcon("BrandFubo", "brand-fubo", {
  nodes: [
    ["path", { d: "M3.5 16v-6a2 2 0 0 1 2-2M2 12h3.5" }, { r: "draw" }],
    ["path", { d: "M7.5 12v2a2 2 0 0 0 4 0v-2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13.5 8v8M13.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "20", cy: "14", r: "2" }, { r: "roll", d: 0.3, a: 1, o: [20, 14] }],
  ],
});
