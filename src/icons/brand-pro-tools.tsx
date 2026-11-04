import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "protools" (CC0-1.0). Pro Tools is a trademark of its owner.
export const BrandProTools = createIcon("BrandProTools", "brand-pro-tools", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3.5 15.5c3.5-1.5 5-8 8.5-8s5 6.5 8.5 8" }, { r: "draw", d: 0.1 }],
  ],
});
