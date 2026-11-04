import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageAi = createIcon("MessageAi", "message-ai", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h3.5" }],
    ["path", { d: "M9.994 19.804l-1.994 1.196v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
