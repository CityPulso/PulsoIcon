import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-bottom-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxBottomLeft = createIcon("AlignBoxBottomLeft", "align-box-bottom-left", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M7 15v2" }, { r: "grow", o: [7, 17] }],
    ["path", { d: "M10 11v6" }, { r: "grow", d: 0.08, o: [10, 17] }],
    ["path", { d: "M13 13v4" }, { r: "grow", d: 0.16, o: [13, 17] }],
  ],
});
