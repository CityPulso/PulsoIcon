import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FunnelPin = createIcon("FunnelPin", "funnel-pin", {
  nodes: [
    ["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414" }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
  ],
});
