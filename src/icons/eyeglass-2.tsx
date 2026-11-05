import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eyeglass-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "eyeglass-2" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Eyeglass2 = createIcon("Eyeglass2", "eyeglass-2", {
  svg: { r: "tilt", a: 8, o: [12, 16] },
  nodes: [
    ["path", { d: "M8 4h-2l-3 10v2.5" }],
    ["path", { d: "M16 4h2l3 10v2.5" }],
    ["path", { d: "M10 16l4 0" }],
    ["path", { d: "M14 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" }],
    ["path", { d: "M3 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" }],
  ],
  solid: [
    [
      "path",
      {
        d: "M8 3a1 1 0 1 1 0 2h-1.257l-2.24 7.467a4.5 4.5 0 0 1 6.24 2.533h2.513a4.502 4.502 0 0 1 6.241 -2.534l-2.241 -7.466h-1.256a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2a1 1 0 0 1 .958 .713l3 10a1 1 0 0 1 .042 .287v2.5a4.5 4.5 0 0 1 -8.972 .5h-2.056a4.5 4.5 0 0 1 -8.972 -.5v-2.5a1 1 0 0 1 .042 -.287l3 -10a1 1 0 0 1 .958 -.713z",
        stroke: "none",
      },
    ],
  ],
});
