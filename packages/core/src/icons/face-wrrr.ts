import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-wrrr" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceWrrr = icon("FaceWrrr", "face-wrrr", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" }, { r: "shake", a: 1, o: [12, 15.5] }],
    ["path", { d: "M8.5 11.5l1.5 -1.5l-1.5 -1.5" }, { r: "press", a: 0.3, o: [9.25, 10] }],
    ["path", { d: "M15.5 11.5l-1.5 -1.5l1.5 -1.5" }, { r: "press", a: 0.3, o: [14.75, 10] }],
  ],
});
