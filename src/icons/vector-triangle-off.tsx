import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vector-triangle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VectorTriangleOff = createIcon("VectorTriangleOff", "vector-triangle-off", {
  nodes: [
    ["path", { d: "M10 6v-1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1" }, { r: "pop", o: [12, 6] }],
    ["path", { d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.08, o: [5, 19] }],
    ["path", { d: "M20.705 20.709a1 1 0 0 1 -.705 .291h-2a1 1 0 0 1 -1 -1v-2c0 -.28 .115 -.532 .3 -.714" }],
    ["path", { d: "M6.5 17.1l3.749 -6.823" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M13.158 9.197l-.658 -1.197" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M7 19h10" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", o: [12, 6] }],
    ["path", { d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.08, o: [5, 19] }],
    ["path", { d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M6.5 17.1l5 -9.1", fill: "none" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M17.5 17.1l-5 -9.1", fill: "none" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M7 19l10 0", fill: "none" }, { r: "draw", d: 0.12, o: [12, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
