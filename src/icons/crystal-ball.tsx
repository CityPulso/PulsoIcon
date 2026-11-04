import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "crystal-ball" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CrystalBall = createIcon("CrystalBall", "crystal-ball", {
  nodes: [
    ["path", { d: "M6.73 17.018a8 8 0 1 1 10.54 0" }, { r: "pulse", a: 0.05, o: [12, 11] }],
    ["path", { d: "M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2" }],
    ["path", { d: "M11 7a3 3 0 0 0 -3 3" }, { r: "redraw", d: 0.1, o: [9.5, 8.5] }],
  ],
});
