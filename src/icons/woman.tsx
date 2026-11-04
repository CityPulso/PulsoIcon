import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "woman" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Woman = createIcon("Woman", "woman", {
  nodes: [
    ["path", { d: "M10 16v5" }],
    ["path", { d: "M14 16v5" }],
    ["path", { d: "M8 16h8l-2 -7h-4l-2 7" }],
    ["path", { d: "M5 11c1.667 -1.333 3.333 -2 5 -2" }, { r: "turn", a: 12, o: [10, 9] }],
    ["path", { d: "M19 11c-1.667 -1.333 -3.333 -2 -5 -2" }, { r: "turn", a: -12, o: [14, 9] }],
    ["path", { d: "M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1, o: [12, 4] }],
  ],
});
