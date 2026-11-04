import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagons" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hexagons = createIcon("Hexagons", "hexagons", {
  nodes: [
    ["path", { d: "M4 18v-5l4 -2l4 2v5l-4 2l-4 -2" }, { r: "pop", d: 0, o: [8, 15.5] }],
    ["path", { d: "M8 11v-5l4 -2l4 2v5" }, { r: "pop", d: 0.1, o: [12, 8.5] }],
    ["path", { d: "M12 13l4 -2l4 2v5l-4 2l-4 -2" }, { r: "pop", d: 0.2, o: [16, 15.5] }],
  ],
});
