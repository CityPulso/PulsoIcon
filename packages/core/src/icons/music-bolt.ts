import { icon } from "../icon.js";

// Adapted from Tabler Icons "music-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicBolt = icon("MusicBolt", "music-bolt", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v8" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", o: [19, 19] }],
  ],
});
