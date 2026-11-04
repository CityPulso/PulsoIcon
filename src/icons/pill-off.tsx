import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pill-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PillOff = createIcon("PillOff", "pill-off", {
  nodes: [
    ["path", { d: "M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M8.5 8.5l7 7" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
