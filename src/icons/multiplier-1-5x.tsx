import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "multiplier-1-5x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Multiplier15x = createIcon("Multiplier15x", "multiplier-1-5x", {
  nodes: [
    ["path", { d: "M4 16v-8l-2 2" }, { r: "draw" }],
    ["path", { d: "M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 16v.01" }, { r: "pop", d: 0.1, o: [7, 16] }],
    ["path", { d: "M17 16l4 -4" }, { r: "spin", d: 0.3, a: 90, o: [19, 14] }],
    ["path", { d: "M21 16l-4 -4" }, { r: "spin", d: 0.3, a: 90, o: [19, 14] }],
  ],
});
