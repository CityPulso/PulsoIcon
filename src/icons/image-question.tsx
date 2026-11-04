import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageQuestion = createIcon("ImageQuestion", "image-question", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M15 21h-9a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", o: [19, 17.5] }],
  ],
});
