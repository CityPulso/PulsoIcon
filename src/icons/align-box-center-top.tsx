import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-center-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxCenterTop = createIcon("AlignBoxCenterTop", "align-box-center-top", {
  nodes: [
    ["path", { d: "M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M11 13h2" }, { r: "growX", o: [12, 13] }],
    ["path", { d: "M9 10h6" }, { r: "growX", d: 0.08, o: [12, 10] }],
    ["path", { d: "M10 7h4" }, { r: "growX", d: 0.16, o: [12, 7] }],
  ],
});
