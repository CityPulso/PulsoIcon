import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicExclamation = createIcon("MusicExclamation", "music-exclamation", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v8" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M19 16v3" }, { r: "draw", o: [19, 17.5] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
  ],
});
