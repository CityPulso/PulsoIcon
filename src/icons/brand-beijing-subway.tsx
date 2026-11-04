import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "beijingsubway" (CC0-1.0). Beijing Subway is a trademark of its owner.
export const BrandBeijingSubway = createIcon("BrandBeijingSubway", "brand-beijing-subway", {
  nodes: [
    ["path", { d: "M19.8 6.5A9.5 9.5 0 1 0 19.8 17.5" }],
    ["path", { d: "M8.5 8h3.5a4 4 0 0 1 0 8H8.5z" }, { r: "pop", d: 0.05, o: [11, 12] }],
    ["path", { d: "M8.5 12h12.5" }, { r: "draw", d: 0.15 }],
  ],
});
