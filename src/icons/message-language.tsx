import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-language" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageLanguage = createIcon("MessageLanguage", "message-language", {
  nodes: [
    ["path", { d: "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" }],
    ["path", { d: "M10 14v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M14 12h-4" }, { r: "draw", d: 0.3 }],
  ],
});
