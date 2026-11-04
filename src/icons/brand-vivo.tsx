import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "vivo" (CC0-1.0). vivo is a trademark of its owner.
export const BrandVivo = createIcon("BrandVivo", "brand-vivo", {
  nodes: [
    ["path", { d: "M2 9l2.25 6 2.25-6" }, { r: "draw" }],
    ["path", { d: "M8.5 9v6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10.5 9l2.25 6 2.25-6" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "19", cy: "12", r: "3" }, { r: "draw", d: 0.3 }],
  ],
});
