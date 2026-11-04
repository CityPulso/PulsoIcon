import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-center-middle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxCenterMiddle = createIcon("AlignBoxCenterMiddle", "align-box-center-middle", {
  nodes: [
    ["path", { d: "M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M11 15h2" }, { r: "growX", o: [12, 15] }],
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 9h4" }, { r: "growX", d: 0.16, o: [12, 9] }],
  ],
});
