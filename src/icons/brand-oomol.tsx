import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "oomol" (CC0-1.0). OOMOL is a trademark of its owner.
export const BrandOomol = createIcon("BrandOomol", "brand-oomol", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "8", cy: "8.5", r: "1.5" }, { r: "pop", o: [8, 8.5] }],
    ["circle", { cx: "16", cy: "15.5", r: "1.5" }, { r: "pop", d: 0.35, o: [16, 15.5] }],
    ["path", { d: "M9.2 9.5c1.6.6 2.8 1.2 2.8 2.5s1.2 1.9 2.8 2.5" }, { r: "draw", d: 0.1 }],
  ],
});
