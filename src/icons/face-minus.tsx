import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceMinus = createIcon("FaceMinus", "face-minus", {
  nodes: [
    ["path", { d: "M20.48 15.014a9 9 0 1 0 -7.956 5.97" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M16 19h6" }, { r: "draw", o: [19, 19] }],
    ["path", { d: "M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" }],
  ],
});
