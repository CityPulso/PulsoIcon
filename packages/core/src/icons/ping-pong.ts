import { icon } from "../icon.js";

// Adapted from Tabler Icons "ping-pong" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PingPong = icon("PingPong", "ping-pong", {
  nodes: [
    [
      "path",
      {
        d: "M12.718 20.713a7.64 7.64 0 0 1 -7.48 -12.755l.72 -.72a7.643 7.643 0 0 1 9.105 -1.283l2.387 -2.345a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-2.346 2.387a7.644 7.644 0 0 1 -1.052 8.864",
      },
      { r: "swing", a: -14, o: [19.5, 4.5] },
    ],
    ["path", { d: "M11 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "bounce", d: 0.15, y: -1, a: 2 }],
    ["path", { d: "M9.3 5.3l9.4 9.4" }, { r: "swing", a: -14, o: [19.5, 4.5] }],
  ],
});
