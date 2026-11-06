import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-silence" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSilence = icon("FaceSilence", "face-silence", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M9 10h-.01" }],
    ["path", { d: "M15 10h-.01" }],
    ["path", { d: "M8 15h8" }, { r: "growX", o: [8, 15] }],
    ["path", { d: "M9 14v2" }, { r: "pop", d: 0.15, o: [9, 15] }],
    ["path", { d: "M12 14v2" }, { r: "pop", d: 0.2, o: [12, 15] }],
    ["path", { d: "M15 14v2" }, { r: "pop", d: 0.25, o: [15, 15] }],
  ],
});
