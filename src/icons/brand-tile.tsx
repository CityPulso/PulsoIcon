import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tile" (CC0-1.0). Tile is a trademark of its owner.

export const BrandTile = createIcon("BrandTile", "brand-tile", {
  nodes: [
    ["path", { d: "M4 6.5v8a2 2 0 0 0 2 2" }, { r: "draw" }],
    ["path", { d: "M2.5 10H6" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M9 10v6.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M9 7h.01" }, { r: "pop", d: 0.16, o: [9, 7] }],
    ["path", { d: "M12 6.5v10" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 13.25h6.5a3.25 3.25 0 1 0-.95 2.3" }, { r: "draw", d: 0.28 }],
  ],
});
