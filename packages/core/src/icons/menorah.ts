import { icon } from "../icon.js";

// Adapted from Tabler Icons "menorah" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Menorah = icon("Menorah", "menorah", {
  nodes: [
    ["path", { d: "M12 4v16" }, { r: "flicker", d: 0.3 }],
    ["path", { d: "M8 4v2a4 4 0 1 0 8 0v-2" }, { r: "flicker" }],
    ["path", { d: "M4 4v2a8 8 0 1 0 16 0v-2" }, { r: "flicker", d: 0.15 }],
    ["path", { d: "M10 20h4" }],
  ],
});
