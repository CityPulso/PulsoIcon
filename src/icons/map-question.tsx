import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapQuestion = createIcon("MapQuestion", "map-question", {
  nodes: [
    ["path", { d: "M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v7.5" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v5.5" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.4, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.1 }],
  ],
});
