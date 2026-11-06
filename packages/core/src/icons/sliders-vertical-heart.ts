import { icon } from "../icon.js";

// Adapted from Tabler Icons "adjustments-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalHeart = icon("SlidersVerticalHeart", "sliders-vertical-heart", {
  nodes: [
    ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M6 4v4" }],
    ["path", { d: "M6 12v8" }],
    ["path", { d: "M12 4v8.5" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M18 4v1" }],
    ["path", { d: "M18 9v2.5" }],
    [
      "path",
      {
        d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", d: 0.1, o: [19, 19] },
    ],
  ],
});
