import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vector-bezier" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VectorBezier = createIcon("VectorBezier", "vector-bezier", {
  nodes: [
    ["path", { d: "M3 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M17 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M10 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", o: [12, 8] }],
    ["path", { d: "M10 8.5a6 6 0 0 0 -5 5.5" }, { r: "draw" }],
    ["path", { d: "M14 8.5a6 6 0 0 1 5 5.5" }, { r: "draw" }],
    ["path", { d: "M10 8l-6 0" }, { r: "turn", d: 0.1, a: -12, o: [10, 8] }],
    ["path", { d: "M20 8l-6 0" }, { r: "turn", d: 0.1, a: 12, o: [14, 8] }],
    ["path", { d: "M2 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", d: 0.1, a: -12, o: [10, 8] }],
    ["path", { d: "M20 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", d: 0.1, a: 12, o: [14, 8] }],
  ],
});
