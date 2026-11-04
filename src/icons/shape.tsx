import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shape" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Shape = createIcon("Shape", "shape", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [19, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M5 7l0 10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 5l10 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 19l10 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 7l0 10" }, { r: "draw", d: 0.1 }],
  ],
});
