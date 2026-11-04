import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mail-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MailShare = createIcon("MailShare", "mail-share", {
  nodes: [
    ["path", { d: "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M3 7l9 6l9 -6" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
