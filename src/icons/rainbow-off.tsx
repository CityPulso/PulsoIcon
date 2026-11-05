import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rainbow-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RainbowOff = createIcon("RainbowOff", "rainbow-off", {
  nodes: [
    ["path", { d: "M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" }, { r: "draw", d: 0 }],
    ["path", { d: "M11.088 11.069a6 6 0 0 0 -5.088 5.931" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M14 17a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M22 17a10 10 0 0 0-20 0" }, { r: "draw", d: 0 }],
    ["path", { d: "M6 17a6 6 0 0 1 12 0" }, { r: "draw", d: 0.08 }, "cut"],
    ["path", { d: "M10 17a2 2 0 0 1 4 0" }, { r: "draw", d: 0.16 }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
