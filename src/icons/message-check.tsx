import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageCheck = createIcon("MessageCheck", "message-check", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M10.99 19.206l-2.99 1.794v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", d: 0.1 }],
  ],
});
