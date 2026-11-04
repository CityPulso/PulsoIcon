import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "multiplier-1x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Multiplier1x = createIcon("Multiplier1x", "multiplier-1x", {
  nodes: [
    ["path", { d: "M9 16v-8l-2 2" }, { r: "draw" }],
    ["path", { d: "M13 16l4 -4" }, { r: "spin", d: 0.2, a: 90, o: [15, 14] }],
    ["path", { d: "M17 16l-4 -4" }, { r: "spin", d: 0.2, a: 90, o: [15, 14] }],
  ],
});
