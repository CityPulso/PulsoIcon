import { icon } from "../icon.js";

// Adapted from Tabler Icons "mail-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MailPause = icon("MailPause", "mail-pause", {
  nodes: [
    ["path", { d: "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M3 7l9 6l9 -6" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
