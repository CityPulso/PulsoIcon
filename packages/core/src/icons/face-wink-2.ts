import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-wink-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceWink2 = icon("FaceWink2", "face-wink-2", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M9 10h-.01" }],
    ["path", { d: "M14.5 15a3.5 3.5 0 0 1 -5 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15.5 8.5l-1.5 1.5l1.5 1.5" }, { r: "blink", o: [14.75, 10] }],
  ],
});
