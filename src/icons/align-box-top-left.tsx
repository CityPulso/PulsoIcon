import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-top-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxTopLeft = createIcon("AlignBoxTopLeft", "align-box-top-left", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M7 9v-2" }, { r: "grow", o: [7, 7] }],
    ["path", { d: "M10 13v-6" }, { r: "grow", d: 0.08, o: [10, 7] }],
    ["path", { d: "M13 11v-4" }, { r: "grow", d: 0.16, o: [13, 7] }],
  ],
});
