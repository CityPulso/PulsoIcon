import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-scan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageScan = createIcon("ImageScan", "image-scan", {
  nodes: [
    ["path", { d: "M15 8h.01" }, { r: "pop", d: 0.2, o: [15, 8] }],
    ["path", { d: "M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" }, { r: "rise", a: 2 }],
    ["path", { d: "M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" }, { r: "rise", d: 0.05, a: 2 }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
  ],
});
