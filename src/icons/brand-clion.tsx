import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "clion" (CC0-1.0). CLion is a trademark of its owner.

export const BrandClion = createIcon("BrandClion", "brand-clion", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18" }],
    ["path", { d: "M11.1 7.9a3 3 0 1 0 0 4.2" }, { r: "draw" }],
    ["path", { d: "M13.5 7v6h4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M7 17h5" }, { r: "flicker", d: 0.25 }],
  ],
});
