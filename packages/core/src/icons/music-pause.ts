import { icon } from "../icon.js";

// Adapted from Tabler Icons "music-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicPause = icon("MusicPause", "music-pause", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v9" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
  ],
});
