import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-sick" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSick = icon("FaceSick", "face-sick", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }, { r: "sway", a: 4, o: [12, 12] }],
    ["path", { d: "M9 10h-.01" }, { r: "blink", d: 0.2, o: [9, 10] }],
    ["path", { d: "M15 10h-.01" }, { r: "blink", d: 0.2, o: [15, 10] }],
    ["path", { d: "M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" }, { r: "shake", a: 1, o: [12, 15.5] }],
  ],
});
