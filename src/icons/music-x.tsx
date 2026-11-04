import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicX = createIcon("MusicX", "music-x", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v9" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", o: [19, 19] }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.12, o: [19, 19] }],
  ],
});
