import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dior" (CC0-1.0). Dior is a trademark of its owner.
export const BrandDior = createIcon("BrandDior", "brand-dior", {
  nodes: [
    ["path", { d: "M2.5 8h1.5a3 4 0 0 1 0 8H2.5z" }, { r: "draw" }],
    ["path", { d: "M9.5 8v8" }, { r: "draw", d: 0.08 }],
    ["ellipse", { cx: "14", cy: "12", rx: "2.75", ry: "4" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M18.5 16V8h1a2 2 0 0 1 0 4h-1M19.5 12l2 4" }, { r: "draw", d: 0.24 }],
  ],
});
