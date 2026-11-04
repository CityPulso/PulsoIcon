import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lapce" (CC0-1.0). Lapce is a trademark of its owner.

export const BrandLapce = createIcon("BrandLapce", "brand-lapce", {
  nodes: [
    ["path", { d: "M5 3v18" }, { r: "draw" }],
    ["path", { d: "M5 3l15 9-15 9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9.5 9l5 3-5 3z" }, { r: "pop", d: 0.25, o: [11.5, 12] }],
  ],
});
