import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pencil-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilQuestion = createIcon("PencilQuestion", "pencil-question", {
  nodes: [
    ["path", { d: "M8 20l6 -6l3 -3l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw" }],
  ],
});
