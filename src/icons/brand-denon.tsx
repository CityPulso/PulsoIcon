import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "denon" (CC0-1.0). Denon is a trademark of its owner.
export const BrandDenon = createIcon("BrandDenon", "brand-denon", {
  nodes: [
    ["path", { d: "M4 4v6h1a2.5 3 0 0 0 0-6z" }, { r: "draw" }],
    ["path", { d: "M13 4h-3.5v6H13M9.5 7h3" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M15.5 10V4l4 6V4" }, { r: "draw", d: 0.16 }],
    ["ellipse", { cx: "9", cy: "17", rx: "2.25", ry: "3" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M13.5 20v-6l4 6v-6" }, { r: "draw", d: 0.32 }],
  ],
});
