import { icon } from "../icon.js";

// Adapted from Tabler Icons "clipboard-text" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClipboardText = icon("ClipboardText", "clipboard-text", {
  nodes: [
    ["path", { d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.1, o: [9, 12] }],
    ["path", { d: "M9 16h6" }, { r: "growX", d: 0.2, o: [9, 16] }],
  ],
});
