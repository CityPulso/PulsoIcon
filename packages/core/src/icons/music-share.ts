import { icon } from "../icon.js";

// Adapted from Tabler Icons "music-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicShare = icon("MusicShare", "music-share", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v9" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18.5, 19.5] }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18.5, 19.5] }],
  ],
});
