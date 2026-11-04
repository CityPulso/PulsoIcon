import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageCancel = createIcon("MessageCancel", "message-cancel", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M11.995 18.603l-3.995 2.397v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
