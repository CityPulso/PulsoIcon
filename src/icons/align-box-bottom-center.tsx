import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-bottom-center" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxBottomCenter = createIcon("AlignBoxBottomCenter", "align-box-bottom-center", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M9 15v2" }, { r: "grow", o: [9, 17] }],
    ["path", { d: "M12 11v6" }, { r: "grow", d: 0.08, o: [12, 17] }],
    ["path", { d: "M15 13v4" }, { r: "grow", d: 0.16, o: [15, 17] }],
  ],
});
