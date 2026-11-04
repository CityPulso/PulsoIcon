import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-horizontal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileHorizontal = createIcon("FileHorizontal", "file-horizontal", {
  nodes: [
    ["path", { d: "M16 5v4a1 1 0 0 0 1 1h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2" }, { r: "pulse", a: 0.05, o: [12, 12] }],
  ],
});
