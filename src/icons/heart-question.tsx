import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartQuestion = createIcon("HeartQuestion", "heart-question", {
  nodes: [
    ["path", { d: "M14.105 17.915l-2.105 2.085l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.524 5.127" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.1 }],
  ],
});
