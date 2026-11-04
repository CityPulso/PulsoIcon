import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-invoice" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileInvoice = createIcon("FileInvoice", "file-invoice", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M9 7l1 0" }, { r: "growX", d: 0.1, o: [9, 7] }],
    ["path", { d: "M9 13l6 0" }, { r: "growX", d: 0.2, o: [9, 13] }],
    ["path", { d: "M13 17l2 0" }, { r: "growX", d: 0.3, o: [13, 17] }],
  ],
});
