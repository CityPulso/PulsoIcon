import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mendeley" (CC0-1.0). Mendeley is a trademark of its owner.
export const BrandMendeley = createIcon("BrandMendeley", "brand-mendeley", {
  nodes: [
    ["circle", { cx: "4.5", cy: "17", r: "2" }],
    ["circle", { cx: "19.5", cy: "17", r: "2" }],
    ["path", { d: "M4.5 15c0-4.5 2-8 4.5-8S12 9 12 10.5M19.5 15c0-4.5-2-8-4.5-8S12 9 12 10.5" }],
    ["circle", { cx: "12", cy: "14.5", r: "2.5" }, { r: "bounce", y: -1, a: 1.5 }],
  ],
});
