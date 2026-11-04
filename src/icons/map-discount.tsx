import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapDiscount = createIcon("MapDiscount", "map-discount", {
  nodes: [
    ["path", { d: "M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v5.5" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.25, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.35, o: [16, 16] }],
  ],
});
