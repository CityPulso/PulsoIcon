import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSearch = createIcon("FaceSearch", "face-search", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -9 9" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M9.5 15c.658 .672 1.56 1 2.5 1" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
