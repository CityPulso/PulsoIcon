import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicQuestion = createIcon("MusicQuestion", "music-question", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v7" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", o: [19, 17.5] }],
  ],
});
