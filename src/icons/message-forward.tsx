import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-forward" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageForward = createIcon("MessageForward", "message-forward", {
  nodes: [
    ["path", { d: "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" }],
    ["path", { d: "M13 8l3 3l-3 3" }, { r: "slide", x: 1, a: 2 }],
    ["path", { d: "M16 11h-8" }, { r: "slide", x: 1, a: 2 }],
  ],
});
