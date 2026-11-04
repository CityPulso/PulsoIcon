import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FunnelDown = createIcon("FunnelDown", "funnel-down", {
  nodes: [
    ["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" }],
    ["path", { d: "M19 16v6" }, { r: "slide", y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", y: 1, a: 2 }],
  ],
});
