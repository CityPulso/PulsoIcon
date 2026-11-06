import { icon } from "../icon.js";

// Adapted from Tabler Icons "music-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicSearch = icon("MusicSearch", "music-search", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v7" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
