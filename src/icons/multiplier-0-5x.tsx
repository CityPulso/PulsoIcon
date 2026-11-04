import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "multiplier-0-5x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Multiplier05x = createIcon("Multiplier05x", "multiplier-0-5x", {
  nodes: [
    ["path", { d: "M8 16h2a2 2 0 1 0 0 -4h-2v-4h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 16v.01" }, { r: "pop", o: [5, 16] }],
    ["path", { d: "M15 16l4 -4" }, { r: "spin", d: 0.3, a: 90, o: [17, 14] }],
    ["path", { d: "M19 16l-4 -4" }, { r: "spin", d: 0.3, a: 90, o: [17, 14] }],
  ],
});
