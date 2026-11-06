import { icon } from "../icon.js";

// Adapted from Tabler Icons "droplet-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DropletPin = icon("DropletPin", "droplet-pin", {
  nodes: [
    [
      "path",
      {
        d: "M18.064 10.877l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.163 7.163 0 0 0 5.102 1.554",
      },
    ],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] }],
  ],
});
