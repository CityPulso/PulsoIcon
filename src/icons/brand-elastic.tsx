import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-elastic" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandElastic = createIcon("BrandElastic", "brand-elastic", {
  nodes: [
    [
      "path",
      {
        d: "M14 2a5 5 0 0 1 5 5c0 .712 -.232 1.387 -.5 2c1.894 .042 3.5 1.595 3.5 3.5c0 1.869 -1.656 3.4 -3.5 3.5c.333 .625 .5 1.125 .5 1.5a2.5 2.5 0 0 1 -2.5 2.5c-.787 0 -1.542 -.432 -2 -1c-.786 1.73 -2.476 3 -4.5 3a5 5 0 0 1 -4.583 -7a3.5 3.5 0 0 1 -.11 -6.992l.195 0a2.5 2.5 0 0 1 2 -4c.787 0 1.542 .432 2 1c.786 -1.73 2.476 -3 4.5 -3l-.002 -.008",
      },
      { r: "jelly", a: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M8.5 9l-3 -1" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9.5 5l-1 4l1 2l5 2l4 -4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M18.499 16l-3 -.5l-1 -2.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14.5 19l1 -3.5" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M5.417 15l4.083 -4" }, { r: "draw", d: 0.3 }],
  ],
});
