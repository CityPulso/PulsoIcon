import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-open-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockOpenOff = createIcon("LockOpenOff", "lock-open-off", {
  nodes: [
    ["path", { d: "M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", o: [12, 16] }],
    ["path", { d: "M8 11v-3m.347 -3.631a4 4 0 0 1 7.653 1.631" }, { r: "lift", y: -1, a: -10, o: [8, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
