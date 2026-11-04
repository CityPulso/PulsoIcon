import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-kid" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceKid = createIcon("FaceKid", "face-kid", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10l.01 0" }, { r: "blink", d: 0.2, o: [9, 10] }],
    ["path", { d: "M15 10l.01 0" }, { r: "blink", d: 0.2, o: [15, 10] }],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }],
    ["path", { d: "M12 3a2 2 0 0 0 0 4" }, { r: "sway", a: 10, o: [12, 7] }],
  ],
});
