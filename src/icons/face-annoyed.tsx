import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-annoyed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceAnnoyed = createIcon("FaceAnnoyed", "face-annoyed", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M15 14c-2 0 -3 1 -3.5 2.05" }, { r: "draw", o: [13, 15] }],
    ["path", { d: "M9 10h-.01" }, { r: "blink", d: 0.2, o: [9, 10] }],
    ["path", { d: "M15 10h-.01" }, { r: "blink", d: 0.2, o: [15, 10] }],
  ],
});
