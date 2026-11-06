import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-tongue-wink-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceTongueWink2 = icon("FaceTongueWink2", "face-tongue-wink-2", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M15 10h-.01" }],
    ["path", { d: "M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" }, { r: "bounce", d: 0.15, x: 0, y: 1, a: 1, o: [12, 16] }],
    ["path", { d: "M7 10c.5 -1 2.5 -1 3 0" }, { r: "blink", o: [8.5, 9.6] }],
  ],
});
