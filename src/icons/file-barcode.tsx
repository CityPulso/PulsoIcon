import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-barcode" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileBarcode = createIcon("FileBarcode", "file-barcode", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M8 13h1v3h-1l0 -3" }, { r: "grow", d: 0.1, o: [8.5, 16] }],
    ["path", { d: "M12 13v3" }, { r: "grow", d: 0.2, o: [12, 16] }],
    ["path", { d: "M15 13h1v3h-1l0 -3" }, { r: "grow", d: 0.3, o: [15.5, 16] }],
  ],
});
