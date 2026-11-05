import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Ai = createIcon("Message2Ai", "message-2-ai", {
  text: true,
  nodes: [
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h3.5" }],
    ["path", { d: "M10 19l-1 -1h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4" }],
  ],
});
