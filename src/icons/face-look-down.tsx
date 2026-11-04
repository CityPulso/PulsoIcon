import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-look-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceLookDown = createIcon("FaceLookDown", "face-look-down", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M9 13h.01" }, { r: "slide", x: 0, y: 1, a: 1, o: [9, 13] }],
    ["path", { d: "M15 13h.01" }, { r: "slide", x: 0, y: 1, a: 1, o: [15, 13] }],
    ["path", { d: "M11 17h2" }, { r: "slide", d: 0.05, x: 0, y: 1, a: 1, o: [12, 17] }],
  ],
});
