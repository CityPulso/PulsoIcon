import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapX = createIcon("MapX", "map-x", {
  nodes: [
    ["path", { d: "M14 19.5l-5 -2.5l-6 3v-13l6 -3l6 3l6 -3v9" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v6.5" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.2 }],
  ],
});
