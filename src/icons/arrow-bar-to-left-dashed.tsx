import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-bar-to-left-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBarToLeftDashed = createIcon("ArrowBarToLeftDashed", "arrow-bar-to-left-dashed", {
  nodes: [
    ["path", { d: "M10 12l10 0" }, { r: "bounce", x: -1, y: 0, a: 2, o: [15, 12] }],
    ["path", { d: "M10 12l4 -4" }, { r: "bounce", x: -1, y: 0, a: 2, o: [15, 12] }],
    ["path", { d: "M10 12l4 4" }, { r: "bounce", x: -1, y: 0, a: 2, o: [15, 12] }],
    ["path", { d: "M4 20l0 -3m0 -13l0 3m0 3.5l0 3" }, { r: "fade", d: 0.15, o: [4, 12] }],
  ],
});
