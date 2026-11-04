import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lawn-mower" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LawnMower = createIcon("LawnMower", "lawn-mower", {
  nodes: [
    ["path", { d: "M6 11h5.38a1 1 0 0 1 .9 .55l.72 1.45h5a1 1 0 0 1 1 1v2" }, { r: "shake", a: 0.5 }],
    ["path", { d: "M3 4h1.13a1 1 0 0 1 1 .86l1.59 11.14" }],
    ["path", { d: "M17 18h-8" }],
    ["path", { d: "M9 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "spin", o: [7, 18] }],
    ["path", { d: "M21 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "spin", o: [19, 18] }],
  ],
});
