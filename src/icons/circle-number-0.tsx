import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-number-0" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleNumber0 = createIcon("CircleNumber0", "circle-number-0", {
  text: true,
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.1 }],
  ],
});
