import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-right-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxRightTop = createIcon("AlignBoxRightTop", "align-box-right-top", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M15 13h2" }, { r: "growX", o: [17, 13] }],
    ["path", { d: "M11 10h6" }, { r: "growX", d: 0.08, o: [17, 10] }],
    ["path", { d: "M13 7h4" }, { r: "growX", d: 0.16, o: [17, 7] }],
  ],
});
