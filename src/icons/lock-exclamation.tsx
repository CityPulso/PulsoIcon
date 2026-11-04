import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockExclamation = createIcon("LockExclamation", "lock-exclamation", {
  nodes: [
    ["path", { d: "M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.734 1.002" }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
