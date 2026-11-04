import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-east" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapEast = createIcon("MapEast", "map-east", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 9h-4v6h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 12h2.5" }, { r: "draw", d: 0.25 }],
  ],
});
