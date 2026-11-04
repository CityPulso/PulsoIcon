import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "odin" (CC0-1.0). Odin is a trademark of its owner.
export const BrandOdin = createIcon("BrandOdin", "brand-odin", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5.5 15 15 5.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9 18.5 18.5 9" }, { r: "draw", d: 0.18 }],
  ],
});
