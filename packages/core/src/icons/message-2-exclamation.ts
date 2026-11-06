import { icon } from "../icon.js";

// Adapted from Tabler Icons "message-2-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Exclamation = icon("Message2Exclamation", "message-2-exclamation", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M15 18l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
