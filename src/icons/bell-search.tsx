import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellSearch = createIcon("BellSearch", "bell-search", {
  nodes: [
    ["path", { d: "M11 17h-7a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 2.685 2.984" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", a: 14, o: [18, 18] }],
  ],
});
