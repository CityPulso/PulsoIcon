import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vector-bezier-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VectorBezierArc = createIcon("VectorBezierArc", "vector-bezier-arc", {
  nodes: [
    ["path", { d: "M3 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.3, o: [5, 12] }],
    ["path", { d: "M17 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.1, o: [19, 12] }],
    ["path", { d: "M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M10 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.2, o: [12, 19] }],
    ["path", { d: "M19 10a5 5 0 0 0 -5 -5" }, { r: "draw" }],
    ["path", { d: "M5 14a5 5 0 0 0 5 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 10a5 5 0 0 1 5 -5" }, { r: "draw", d: 0.2 }],
  ],
});
