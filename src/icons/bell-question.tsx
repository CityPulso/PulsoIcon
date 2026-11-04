import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellQuestion = createIcon("BellQuestion", "bell-question", {
  nodes: [
    ["path", { d: "M13.5 17h-9.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 5.914 .716" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.05 }],
  ],
});
