import { icon } from "../icon.js";

// Adapted from Tabler Icons "pencil-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilDiscount = icon("PencilDiscount", "pencil-discount", {
  nodes: [
    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.3, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.2, o: [16, 16] }],
  ],
});
