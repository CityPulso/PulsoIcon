import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "float-center" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FloatCenter = createIcon("FloatCenter", "float-center", {
  nodes: [
    ["path", { d: "M9 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "bounce", y: -1, a: 1.5, o: [12, 8] }],
    ["path", { d: "M4 7l1 0" }, { r: "growX", d: 0.1, o: [4, 7] }],
    ["path", { d: "M4 11l1 0" }, { r: "growX", d: 0.15, o: [4, 11] }],
    ["path", { d: "M19 7l1 0" }, { r: "growX", d: 0.1, o: [20, 7] }],
    ["path", { d: "M19 11l1 0" }, { r: "growX", d: 0.15, o: [20, 11] }],
    ["path", { d: "M4 15l16 0" }, { r: "growX", d: 0.2, o: [4, 15] }],
    ["path", { d: "M4 19l16 0" }, { r: "growX", d: 0.25, o: [4, 19] }],
  ],
});
