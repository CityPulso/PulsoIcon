import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "matrix" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Matrix = createIcon("Matrix", "matrix", {
  nodes: [
    ["path", { d: "M8 16h.013" }, { r: "pop", d: 0.1, o: [8, 16] }],
    ["path", { d: "M12.01 16h.005" }, { r: "pop", d: 0.15, o: [12, 16] }],
    ["path", { d: "M16.015 16h.005" }, { r: "pop", d: 0.2, o: [16, 16] }],
    ["path", { d: "M16.015 12h.005" }, { r: "pop", d: 0.15, o: [16, 12] }],
    ["path", { d: "M8.01 12h.005" }, { r: "pop", d: 0.05, o: [8, 12] }],
    ["path", { d: "M12.01 12h.005" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M16.02 8h.005" }, { r: "pop", d: 0.1, o: [16, 8] }],
    ["path", { d: "M8.015 8h.005" }, { r: "pop", d: 0.0, o: [8, 8] }],
    ["path", { d: "M12.015 8h.005" }, { r: "pop", d: 0.05, o: [12, 8] }],
    ["path", { d: "M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1" }],
    ["path", { d: "M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1" }],
  ],
});
