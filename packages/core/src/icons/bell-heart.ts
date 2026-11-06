import { icon } from "../icon.js";

// Adapted from Tabler Icons "bell-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellHeart = icon("BellHeart", "bell-heart", {
  nodes: [
    ["path", { d: "M10 17h-6a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1c0 1.408 .97 2.59 2.28 2.913" }, { r: "ring", a: 8, o: [12, 3] }],
    [
      "path",
      {
        d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", o: [18, 18.5] },
    ],
  ],
});
