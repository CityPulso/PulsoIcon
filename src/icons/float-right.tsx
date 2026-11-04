import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "float-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FloatRight = createIcon("FloatRight", "float-right", {
  nodes: [
    ["path", { d: "M14 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M4 7l6 0" }, { r: "growX", d: 0.1, o: [4, 7] }],
    ["path", { d: "M4 11l6 0" }, { r: "growX", d: 0.15, o: [4, 11] }],
    ["path", { d: "M4 15l16 0" }, { r: "growX", d: 0.2, o: [4, 15] }],
    ["path", { d: "M4 19l16 0" }, { r: "growX", d: 0.25, o: [4, 19] }],
  ],
});
