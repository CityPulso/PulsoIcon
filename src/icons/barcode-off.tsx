import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "barcode-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BarcodeOff = createIcon("BarcodeOff", "barcode-off", {
  nodes: [
    ["path", { d: "M4 7v-1c0 -.552 .224 -1.052 .586 -1.414" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M4 17v1a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 20h2c.551 0 1.05 -.223 1.412 -.584" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M5 11h1v2h-1l0 -2" }, { r: "fade" }],
    ["path", { d: "M10 11v2" }, { r: "fade" }],
    ["path", { d: "M15 11v.01" }, { r: "fade" }],
    ["path", { d: "M19 11v2" }, { r: "fade" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
