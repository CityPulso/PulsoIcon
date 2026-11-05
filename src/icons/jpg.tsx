import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "jpg" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Jpg = createIcon("Jpg", "jpg", {
  text: true,
  nodes: [
    ["path", { d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M10 16v-8h2a2 2 0 1 1 0 4h-2" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M3 8h4v6a2 2 0 0 1 -2 2h-1.5a.5 .5 0 0 1 -.5 -.5v-.5" }, { r: "draw" }],
  ],
});
