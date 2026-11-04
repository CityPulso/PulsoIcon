import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "grid-pattern" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GridPattern = createIcon("GridPattern", "grid-pattern", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M10 8v8" }, { r: "grow", o: [10, 12] }],
    ["path", { d: "M14 8v8" }, { r: "grow", d: 0.05, o: [14, 12] }],
    ["path", { d: "M8 10h8" }, { r: "growX", d: 0.15, o: [12, 10] }],
    ["path", { d: "M8 14h8" }, { r: "growX", d: 0.2, o: [12, 14] }],
  ],
});
