import { icon } from "../icon.js";

// Adapted from Tabler Icons "barrier-block" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "barrier-block" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BarrierBlock = icon("BarrierBlock", "barrier-block", {
  svg: { r: "shake", a: 1, o: [12, 12] },
  nodes: [
    ["path", { d: "M4 8a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -7" }],
    ["path", { d: "M7 16v4" }],
    ["path", { d: "M7.5 16l9 -9" }],
    ["path", { d: "M13.5 16l6.5 -6.5" }],
    ["path", { d: "M4 13.5l6.5 -6.5" }],
    ["path", { d: "M17 16v4" }],
    ["path", { d: "M5 20h4" }],
    ["path", { d: "M15 20h4" }],
    ["path", { d: "M17 7v-2" }],
    ["path", { d: "M7 7v-2" }],
  ],
  solid: [
    [
      "path",
      {
        d: "M15 21a1 1 0 0 1 0 -2h1v-2h-8v2h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0 -2h1v-2h-1a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2h1v-1a1 1 0 1 1 2 0v1h8v-1a1 1 0 0 1 2 0v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-1v2h1a1 1 0 0 1 0 2zm-2.086 -13l-7 7h4.17l6.916 -7zm6.086 2.914l-4.086 4.086h4.086zm-10.916 -2.914h-3.084v3.084z",
        stroke: "none",
      },
    ],
  ],
});
