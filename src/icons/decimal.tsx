import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "decimal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Decimal = createIcon("Decimal", "decimal", {
  nodes: [
    ["path", { d: "M17 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 16h.01" }, { r: "pop", o: [5, 16] }],
  ],
});
