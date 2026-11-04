import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Share = createIcon("Message2Share", "message-2-share", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
