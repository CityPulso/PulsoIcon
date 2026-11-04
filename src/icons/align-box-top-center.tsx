import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-top-center" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxTopCenter = createIcon("AlignBoxTopCenter", "align-box-top-center", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M9 9v-2" }, { r: "grow", o: [9, 7] }],
    ["path", { d: "M12 13v-6" }, { r: "grow", d: 0.08, o: [12, 7] }],
    ["path", { d: "M15 11v-4" }, { r: "grow", d: 0.16, o: [15, 7] }],
  ],
});
