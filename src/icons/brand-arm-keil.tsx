import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "armkeil" (CC0-1.0). Arm Keil is a trademark of its owner.
export const BrandArmKeil = createIcon("BrandArmKeil", "brand-arm-keil", {
  nodes: [
    ["path", { d: "M2.5 7v10M7 7l-4 5 4 5" }, { r: "draw" }],
    ["path", { d: "M13 7H9v10h4M9 12h3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15.5 7v10" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18 7v10h4" }, { r: "draw", d: 0.3 }],
  ],
});
