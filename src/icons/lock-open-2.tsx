import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-open-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockOpen2 = createIcon("LockOpen2", "lock-open-2", {
  nodes: [
    ["path", { d: "M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" }],
    ["path", { d: "M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "pop", d: 0.15, o: [10, 16] }],
    ["path", { d: "M13 11v-4a4 4 0 1 1 8 0v4" }, { r: "swing", a: -12, o: [13, 11] }],
  ],
});
