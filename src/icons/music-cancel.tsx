import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicCancel = createIcon("MusicCancel", "music-cancel", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v8" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.15, o: [19, 19] }],
  ],
});
