import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "agora" (CC0-1.0). Agora is a trademark of its owner.
export const BrandAgora = createIcon("BrandAgora", "brand-agora", {
  nodes: [
    ["circle", { cx: "6.5", cy: "11", r: "3.5" }, { r: "draw" }],
    ["path", { d: "M10 7.5v7" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "16.5", cy: "11", r: "3.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20 7.5v9a3.5 3.5 0 0 1-6.3 2.1" }, { r: "draw", d: 0.3 }],
  ],
});
