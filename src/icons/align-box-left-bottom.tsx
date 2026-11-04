import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-left-bottom" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxLeftBottom = createIcon("AlignBoxLeftBottom", "align-box-left-bottom", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M9 17h-2" }, { r: "growX", o: [7, 17] }],
    ["path", { d: "M13 14h-6" }, { r: "growX", d: 0.08, o: [7, 14] }],
    ["path", { d: "M11 11h-4" }, { r: "growX", d: 0.16, o: [7, 11] }],
  ],
});
