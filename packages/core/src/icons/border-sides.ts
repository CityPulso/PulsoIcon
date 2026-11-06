import { icon } from "../icon.js";

// Adapted from Tabler Icons "border-sides" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BorderSides = icon("BorderSides", "border-sides", {
  nodes: [
    ["path", { d: "M4 8v8" }, { r: "draw" }],
    ["path", { d: "M20 16v-8" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M8 4h8" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M8 20h8" }, { r: "draw", d: 0.24 }],
  ],
});
