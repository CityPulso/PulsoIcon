import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-annoyed-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceAnnoyed2 = createIcon("FaceAnnoyed2", "face-annoyed-2", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M15 14c-2 0 -3 1 -3.5 2.05" }, { r: "shake", d: 0.2, a: 1, o: [13, 15] }],
    ["path", { d: "M10 9.25c-.5 1 -2.5 1 -3 0" }, { r: "blink", o: [8.5, 9.6] }],
    ["path", { d: "M17 9.25c-.5 1 -2.5 1 -3 0" }, { r: "blink", o: [15.5, 9.6] }],
  ],
});
