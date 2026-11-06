import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-tongue-wink" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceTongueWink = icon("FaceTongueWink", "face-tongue-wink", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M10 14v2a2 2 0 0 0 4 0v-2" }, { r: "bounce", d: 0.1, x: 0, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M15.5 14h-7" }],
    ["path", { d: "M17 10c-.5 -1 -2.5 -1 -3 0" }, { r: "blink", o: [15.5, 9.6] }],
  ],
});
