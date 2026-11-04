import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-north" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapNorth = createIcon("MapNorth", "map-north", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M10 15v-6l4 6v-6" }, { r: "draw", d: 0.1 }],
  ],
});
