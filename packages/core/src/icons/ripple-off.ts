import { icon } from "../icon.js";

// Adapted from Tabler Icons "ripple-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RippleOff = icon("RippleOff", "ripple-off", {
  nodes: [
    ["path", { d: "M3 7c.915 -.61 1.83 -1.034 2.746 -1.272m4.212 .22c.68 .247 1.361 .598 2.042 1.052c3 2 6 2 9 0" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M3 17c3 -2 6 -2 9 0c2.092 1.395 4.184 1.817 6.276 1.266" }, { r: "slide", d: 0.16, x: 1, a: 1 }],
    ["path", { d: "M3 12c3 -2 6 -2 9 0m5.482 1.429c1.173 -.171 2.345 -.647 3.518 -1.429" }, { r: "slide", d: 0.08, x: 1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M2 12q2.5 2 5 0t5 0 5 0 5 0", fill: "none" }, { r: "slide", d: 0.08, x: 1, a: 1 }],
    ["path", { d: "M2 19q2.5 2 5 0t5 0 5 0 5 0", fill: "none" }, { r: "slide", d: 0.16, x: 1, a: 1 }],
    ["path", { d: "M2 5q2.5 2 5 0t5 0 5 0 5 0", fill: "none" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
