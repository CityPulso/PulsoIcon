import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exposure-minus-1" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExposureMinus1 = createIcon("ExposureMinus1", "exposure-minus-1", {
  nodes: [
    ["path", { d: "M3 12h6" }, { r: "pop", o: [6, 12] }],
    ["path", { d: "M18 19v-14l-4 4" }, { r: "draw", d: 0.15 }],
  ],
});
