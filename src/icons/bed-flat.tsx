import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bed-flat" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BedFlat = createIcon("BedFlat", "bed-flat", {
  nodes: [
    ["path", { d: "M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", d: 0.1, a: 0.1, o: [5, 11] }],
    ["path", { d: "M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5" }, { r: "pulse", a: 0.06, o: [15.5, 13] }],
    ["path", { d: "M3 16h18" }],
  ],
});
