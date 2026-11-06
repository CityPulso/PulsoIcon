import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchHeart = icon("WatchHeart", "watch-heart", {
  nodes: [
    ["path", { d: "M10 18h-1a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" }],
    ["path", { d: "M9 18v3h2.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
    [
      "path",
      {
        d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", d: 0.1, o: [18.5, 18.5] },
    ],
  ],
});
