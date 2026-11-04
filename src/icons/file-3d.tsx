import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-3d" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const File3d = createIcon("File3d", "file-3d", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M12 13.5l4 -1.5" }, { r: "wobble", a: 8, o: [12, 14.5] }],
    ["path", { d: "M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846l-4 1.846" }, { r: "wobble", a: 8, o: [12, 14.5] }],
    ["path", { d: "M8 12v4.2l4 1.8" }, { r: "wobble", a: 8, o: [12, 14.5] }],
  ],
});
