import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellExclamation = createIcon("BellExclamation", "bell-exclamation", {
  nodes: [
    ["path", { d: "M15 17h-11a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1.5" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
