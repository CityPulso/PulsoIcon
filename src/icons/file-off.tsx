import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileOff = createIcon("FileOff", "file-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, { r: "float", o: [12, 12] }],
  ],
});
