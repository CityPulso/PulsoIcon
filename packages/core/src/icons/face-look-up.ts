import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-look-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceLookUp = icon("FaceLookUp", "face-look-up", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M9 8h.01" }, { r: "slide", x: 0, y: -1, a: 1, o: [9, 8] }],
    ["path", { d: "M15 8h.01" }, { r: "slide", x: 0, y: -1, a: 1, o: [15, 8] }],
    ["path", { d: "M11 12h2" }, { r: "slide", d: 0.05, x: 0, y: -1, a: 1, o: [12, 12] }],
  ],
});
