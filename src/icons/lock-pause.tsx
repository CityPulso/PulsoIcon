import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockPause = createIcon("LockPause", "lock-pause", {
  nodes: [
    ["path", { d: "M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
