import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "registered" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Registered = createIcon("Registered", "registered", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M10 15v-6h2a2 2 0 1 1 0 4h-2" }, { r: "draw" }],
    ["path", { d: "M14 15l-2 -2" }, { r: "draw", d: 0.3 }],
  ],
});
