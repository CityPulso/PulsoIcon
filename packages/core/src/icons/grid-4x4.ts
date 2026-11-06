import { icon } from "../icon.js";

// Adapted from Tabler Icons "grid-4x4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Grid4x4 = icon("Grid4x4", "grid-4x4", {
  nodes: [
    ["path", { d: "M3 6h18" }, { r: "draw" }],
    ["path", { d: "M3 12h18" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M3 18h18" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6 3v18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 3v18" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18 3v18" }, { r: "draw", d: 0.25 }],
  ],
});
