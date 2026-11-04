import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-delta" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileDelta = createIcon("FileDelta", "file-delta", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M9 17h6l-3 -6l-3 6" }, { r: "pop", d: 0.1, o: [12, 14] }],
  ],
});
