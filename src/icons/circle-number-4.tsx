import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-number-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleNumber4 = createIcon("CircleNumber4", "circle-number-4", {
  text: true,
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M10 8v3a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.22 }],
  ],
});
