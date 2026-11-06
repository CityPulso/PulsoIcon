import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-tongue" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceTongue = icon("FaceTongue", "face-tongue", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10l.01 0" }, { r: "blink", d: 0.15, o: [9, 10] }],
    ["path", { d: "M15 10l.01 0" }, { r: "blink", d: 0.15, o: [15, 10] }],
    ["path", { d: "M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7" }, { r: "bounce", x: 0, y: 1, a: 1, o: [12, 15] }],
  ],
});
