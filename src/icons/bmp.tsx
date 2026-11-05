import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bmp" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Bmp = createIcon("Bmp", "bmp", {
  text: true,
  nodes: [
    ["path", { d: "M18 16v-8h2a2 2 0 1 1 0 4h-2" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2" }, { r: "draw" }],
    ["path", { d: "M9 16v-8l3 6l3 -6v8" }, { r: "draw", d: 0.12 }],
  ],
});
