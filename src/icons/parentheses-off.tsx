import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "parentheses-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ParenthesesOff = createIcon("ParenthesesOff", "parentheses-off", {
  nodes: [
    ["path", { d: "M5.743 5.745a12.253 12.253 0 0 0 1.257 14.255" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794a12.291 12.291 0 0 1 -1.254 1.739" }, { r: "slide", x: 1, a: 1, o: [18, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", fill: "none" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9", fill: "none" }, { r: "slide", x: 1, a: 1, o: [18, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
