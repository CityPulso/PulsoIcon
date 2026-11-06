import { icon } from "../icon.js";

// Adapted from Tabler Icons "hanger-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HangerOff = icon("HangerOff", "hanger-off", {
  nodes: [
    [
      "path",
      { d: "M14 6a2 2 0 1 0 -4 0m6.506 6.506l3.461 1.922a2 2 0 0 1 1.029 1.749v.823m-2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l6.673 -3.707" },
      { r: "swing", a: 6, o: [12, 4] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428",
        fill: "none",
      },
      { r: "swing", a: 6, o: [12, 4] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
