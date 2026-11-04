import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-number-6" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleNumber6 = createIcon("CircleNumber6", "circle-number-6", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M14 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" }, { r: "draw", d: 0.1 }],
  ],
});
