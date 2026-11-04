import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shirt-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShirtOff = createIcon("ShirtOff", "shirt-off", {
  nodes: [
    [
      "path",
      { d: "M8.243 4.252l.757 -.252c0 .43 .09 .837 .252 1.206m1.395 1.472a3 3 0 0 0 4.353 -2.678l6 2v5h-3v3m0 4v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l2.26 -.753" },
      { r: "sway", a: 3, o: [12, 4] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
