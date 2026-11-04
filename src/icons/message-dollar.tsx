import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessageDollar = createIcon("MessageDollar", "message-dollar", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3.5" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.1, o: [19, 18] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "draw", d: 0.1, o: [19, 18] }],
  ],
});
