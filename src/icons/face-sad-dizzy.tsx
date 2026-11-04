import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-sad-dizzy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSadDizzy = createIcon("FaceSadDizzy", "face-sad-dizzy", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0" }],
    ["path", { d: "M8 9l2 2" }, { r: "spin", a: 180, o: [9, 10] }],
    ["path", { d: "M10 9l-2 2" }, { r: "spin", a: 180, o: [9, 10] }],
    ["path", { d: "M14 9l2 2" }, { r: "spin", a: 180, o: [15, 10] }],
    ["path", { d: "M16 9l-2 2" }, { r: "spin", a: 180, o: [15, 10] }],
  ],
});
