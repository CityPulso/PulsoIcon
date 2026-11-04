import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Question = createIcon("Message2Question", "message-2-question", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M14.5 18.5l-2.5 2.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.05 }],
  ],
});
