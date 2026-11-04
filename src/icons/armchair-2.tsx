import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "armchair-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Armchair2 = createIcon("Armchair2", "armchair-2", {
  nodes: [
    ["path", { d: "M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" }, { r: "press", a: 0.06, o: [12, 19] }],
    ["path", { d: "M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" }, { r: "press", a: 0.06, o: [12, 19] }],
    ["path", { d: "M8 12h8" }, { r: "press", a: 0.06, o: [12, 19] }],
    ["path", { d: "M7 19v2" }],
    ["path", { d: "M17 19v2" }],
  ],
});
