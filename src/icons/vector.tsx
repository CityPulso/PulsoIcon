import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vector" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Vector = createIcon("Vector", "vector", {
  nodes: [
    ["path", { d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.1, o: [19, 5] }],
    ["path", { d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "M5 7l0 10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 7l0 10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 5l10 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 19l10 0" }, { r: "draw", d: 0.1 }],
  ],
});
