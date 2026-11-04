import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "svg" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Svg = createIcon("Svg", "svg", {
  nodes: [
    ["path", { d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" }, { r: "draw" }],
    ["path", { d: "M10 8l1.5 8h1l1.5 -8" }, { r: "draw", d: 0.12 }],
  ],
});
