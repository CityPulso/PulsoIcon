import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicCode = createIcon("MusicCode", "music-code", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v9" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, y: 0, a: 1, o: [16, 19] }],
  ],
});
