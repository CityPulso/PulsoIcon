import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-right-middle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxRightMiddle = createIcon("AlignBoxRightMiddle", "align-box-right-middle", {
  nodes: [
    ["path", { d: "M15 15h2" }, { r: "growX", o: [17, 15] }],
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M11 12h6" }, { r: "growX", d: 0.08, o: [17, 12] }],
    ["path", { d: "M13 9h4" }, { r: "growX", d: 0.16, o: [17, 9] }],
  ],
});
