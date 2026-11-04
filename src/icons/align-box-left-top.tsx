import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "align-box-left-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignBoxLeftTop = createIcon("AlignBoxLeftTop", "align-box-left-top", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M9 13h-2" }, { r: "growX", o: [7, 13] }],
    ["path", { d: "M13 10h-6" }, { r: "growX", d: 0.08, o: [7, 10] }],
    ["path", { d: "M11 7h-4" }, { r: "growX", d: 0.16, o: [7, 7] }],
  ],
});
