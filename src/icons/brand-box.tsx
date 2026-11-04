import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "box" (CC0-1.0). Box is a trademark of its owner.
export const BrandBox = createIcon("BrandBox", "brand-box", {
  nodes: [
    ["path", { d: "M3 7v10" }, { r: "draw" }],
    ["circle", { cx: "5.5", cy: "14.5", r: "2.5" }, { r: "draw", d: 0.08 }],
    ["circle", { cx: "12.5", cy: "14.5", r: "2.5" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M17 12l4.5 5M21.5 12L17 17" }, { r: "draw", d: 0.24 }],
  ],
});
