import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceCheck = createIcon("FaceCheck", "face-check", {
  nodes: [
    ["path", { d: "M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", o: [18, 19] }],
  ],
});
