import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mail-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MailAi = createIcon("MailAi", "mail-ai", {
  nodes: [
    ["path", { d: "M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M3 7l8 5.345m4 -1.345l6 -4" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
