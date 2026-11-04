import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-agender" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderAgender = createIcon("GenderAgender", "gender-agender", {
  nodes: [
    ["path", { d: "M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M7 12h11" }, { r: "draw", d: 0.1 }],
  ],
});
