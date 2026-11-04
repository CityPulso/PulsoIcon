import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartDiscount = createIcon("HeartDiscount", "heart-discount", {
  nodes: [
    ["path", { d: "M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" }, { r: "beat", o: [12, 12] }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.25, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.3, o: [16, 16] }],
  ],
});
