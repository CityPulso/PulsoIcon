import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vector-bezier-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VectorBezier2 = createIcon("VectorBezier2", "vector-bezier-2", {
  nodes: [
    ["path", { d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M7 5l7 0" }, { r: "turn", d: 0.25, a: -12, o: [7, 5] }],
    ["path", { d: "M10 19l7 0" }, { r: "turn", d: 0.25, a: -12, o: [17, 19] }],
    ["path", { d: "M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", d: 0.25, a: -12, o: [17, 19] }],
    ["path", { d: "M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", d: 0.25, a: -12, o: [7, 5] }],
    ["path", { d: "M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" }, { r: "draw", d: 0.15 }],
  ],
});
