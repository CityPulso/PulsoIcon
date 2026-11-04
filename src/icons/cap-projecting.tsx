import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cap-projecting" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CapProjecting = createIcon("CapProjecting", "cap-projecting", {
  nodes: [
    ["path", { d: "M20 6h-13a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h13" }, { r: "draw" }],
    ["path", { d: "M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "pop", d: 0.3, o: [11, 12] }],
    ["path", { d: "M13 12h7" }, { r: "draw", d: 0.3 }],
  ],
});
