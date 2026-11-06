import { icon } from "../icon.js";

// Adapted from Tabler Icons "label-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "label" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LabelOff = icon("LabelOff", "label-off", {
  nodes: [
    [
      "path",
      { d: "M7 7h-1a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .394 -.081m1.86 -2.137l2.226 -2.782l-3.7 -4.625a1 1 0 0 0 -.78 -.375h-5.52" },
      { r: "swing", o: [4, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      { d: "M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-10.52a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z", stroke: "none" },
      { r: "swing", o: [4, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
