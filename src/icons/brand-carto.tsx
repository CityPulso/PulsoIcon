import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "carto" (CC0-1.0). Carto is a trademark of its owner.
export const BrandCarto = createIcon("BrandCarto", "brand-carto", {
  nodes: [
    ["path", { d: "M8.47 9.53A3.5 3.5 0 1 0 8.47 14.47" }, { r: "draw" }],
    ["circle", { cx: "16", cy: "12", r: "6" }, { r: "draw", d: 0.15 }],
    ["circle", { cx: "16", cy: "12", r: "2" }, { r: "pop", d: 0.35, o: [16, 12] }],
  ],
});
