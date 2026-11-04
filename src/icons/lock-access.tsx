import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-access" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockAccess = createIcon("LockAccess", "lock-access", {
  nodes: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M8 12a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" }],
    ["path", { d: "M10 11v-2a2 2 0 1 1 4 0v2" }, { r: "lift", d: 0.1, y: -1 }],
  ],
});
