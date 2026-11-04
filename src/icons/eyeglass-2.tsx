import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eyeglass-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Eyeglass2 = createIcon("Eyeglass2", "eyeglass-2", {
  svg: { r: "tilt", a: 8, o: [12, 16] },
  nodes: [
    ["path", { d: "M8 4h-2l-3 10v2.5" }],
    ["path", { d: "M16 4h2l3 10v2.5" }],
    ["path", { d: "M10 16l4 0" }],
    ["path", { d: "M14 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" }],
    ["path", { d: "M3 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" }],
  ],
});
