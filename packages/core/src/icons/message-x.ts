import { icon } from "../icon.js";

// Adapted from Tabler Icons "message-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageX = icon("MessageX", "message-x", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.25 }],
  ],
});
