import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-nervous" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceNervous = createIcon("FaceNervous", "face-nervous", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10h.01" }, { r: "blink", d: 0.1, o: [9, 10] }],
    ["path", { d: "M15 10h.01" }, { r: "blink", d: 0.1, o: [15, 10] }],
    ["path", { d: "M8 16l2 -2l2 2l2 -2l2 2" }, { r: "shake", a: 1, o: [12, 15] }],
  ],
});
