import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sport-billiard" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SportBilliard = createIcon("SportBilliard", "sport-billiard", {
  nodes: [
    ["path", { d: "M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "roll", x: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "roll", d: 0.1, x: -1, a: 1.5, o: [12, 14] }],
    ["path", { d: "M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" }],
  ],
});
