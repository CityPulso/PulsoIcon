import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-shredder" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileShredder = createIcon("FileShredder", "file-shredder", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
    ["path", { d: "M3 12l18 0" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M6 16l0 2" }, { r: "grow", d: 0.15, o: [6, 16] }],
    ["path", { d: "M10 16l0 6" }, { r: "grow", d: 0.23, o: [10, 16] }],
    ["path", { d: "M14 16l0 2" }, { r: "grow", d: 0.31, o: [14, 16] }],
    ["path", { d: "M18 16l0 4" }, { r: "grow", d: 0.39, o: [18, 16] }],
  ],
});
