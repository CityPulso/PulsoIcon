import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-top-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxTopRight = createIcon("AlignBoxTopRight", "align-box-top-right", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M11 9v-2" }, { r: "grow", o: [11, 7] }],
    ["path", { d: "M14 13v-6" }, { r: "grow", d: 0.08, o: [14, 7] }],
    ["path", { d: "M17 11v-4" }, { r: "grow", d: 0.16, o: [17, 7] }],
  ],
});
