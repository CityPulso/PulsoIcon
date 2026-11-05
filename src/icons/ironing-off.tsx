import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ironing-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "ironing" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IroningOff = createIcon("IroningOff", "ironing-off", {
  nodes: [
    ["path", { d: "M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007 .044m-2.806 1.164h-15a7 7 0 0 1 7 -7h1m4 0h4.8" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2z",
        stroke: "none",
      },
      { r: "slide", x: 1, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
