import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dota2" (CC0-1.0). Dota 2 is a trademark of its owner.
export const BrandDota2 = createIcon("BrandDota2", "brand-dota-2", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M6.5 9.5l8 8M9.5 6.5l8 8" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M15 6h3v3" }, { r: "pop", d: 0.25, o: [16.5, 7.5] }],
    ["path", { d: "M6 15v3h3" }, { r: "pop", d: 0.3, o: [7.5, 16.5] }],
  ],
});
