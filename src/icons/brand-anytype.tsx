import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "anytype" (CC0-1.0). Anytype is a trademark of its owner.
export const BrandAnytype = createIcon("BrandAnytype", "brand-anytype", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M8 7.5h5" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "10.5", cy: "14", r: "2.5" }, { r: "pop", d: 0.12, o: [10.5, 14] }],
    ["path", { d: "M16 9.5v7" }, { r: "grow", d: 0.2, o: [16, 16.5] }],
  ],
});
