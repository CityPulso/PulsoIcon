import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ball-bowling" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BallBowling = createIcon("BallBowling", "ball-bowling", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M11 9l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M15 8l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M14 12l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
  ],
});
