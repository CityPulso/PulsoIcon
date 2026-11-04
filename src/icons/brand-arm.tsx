import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "arm" (CC0-1.0). Arm is a trademark of its owner.
export const BrandArm = createIcon("BrandArm", "brand-arm", {
  nodes: [
    ["path", { d: "M7.5 9.5v6M7.5 12.5a3 3 0 1 0-6 0 3 3 0 1 0 6 0" }, { r: "draw" }],
    ["path", { d: "M9.5 15.5v-6M9.5 12a2.5 2.5 0 0 1 2.5-2.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M14 15.5v-6M14 11.5a2 2 0 0 1 4 0v4M18 11.5a2 2 0 0 1 4 0v4" }, { r: "draw", d: 0.24 }],
  ],
});
