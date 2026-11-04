import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-douban" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandDouban = createIcon("BrandDouban", "brand-douban", {
  nodes: [
    ["path", { d: "M4 20h16" }, { r: "growX", d: 0.3, o: [12, 20] }],
    ["path", { d: "M5 4h14" }, { r: "growX", o: [12, 4] }],
    ["path", { d: "M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2" }, { r: "pop", d: 0.1, o: [12, 11] }],
    ["path", { d: "M16 14l-2 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8 17l1 3" }, { r: "draw", d: 0.2 }],
  ],
});
