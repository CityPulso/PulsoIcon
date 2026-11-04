import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellPause = createIcon("BellPause", "bell-pause", {
  nodes: [
    ["path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 4.022 2.821" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
