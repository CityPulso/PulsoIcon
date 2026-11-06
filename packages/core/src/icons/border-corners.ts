import { icon } from "../icon.js";

// Adapted from Tabler Icons "border-corners" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BorderCorners = icon("BorderCorners", "border-corners", {
  nodes: [
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "draw" }],
    ["path", { d: "M20 16v2a2 2 0 0 1 -2 2h-2" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M8 20h-2a2 2 0 0 1 -2 -2v-2" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "draw", d: 0.24 }],
  ],
});
