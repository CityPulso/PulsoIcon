import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicDown = createIcon("MusicDown", "music-down", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v8" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M19 16v6" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [19, 19] }],
  ],
});
