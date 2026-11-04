import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FunnelDiscount = createIcon("FunnelDiscount", "funnel-discount", {
  nodes: [
    ["path", { d: "M12.705 19.765l-3.705 1.235v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v.5" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.35, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.25, o: [16, 16] }],
  ],
});
