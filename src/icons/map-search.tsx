import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapSearch = createIcon("MapSearch", "map-search", {
  nodes: [
    ["path", { d: "M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v5" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
  ],
});
