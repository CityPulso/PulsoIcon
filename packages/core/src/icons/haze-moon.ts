import { icon } from "../icon.js";

// Adapted from Tabler Icons "haze-moon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HazeMoon = icon("HazeMoon", "haze-moon", {
  nodes: [
    ["path", { d: "M3 16h18" }, { r: "slide", d: 0.1, x: 1, a: 1.5 }],
    ["path", { d: "M3 20h18" }, { r: "slide", d: 0.15, x: -1, a: 1.5 }],
    [
      "path",
      {
        d: "M8.296 16c-2.268 -1.4 -3.598 -4.087 -3.237 -6.916c.443 -3.48 3.308 -6.083 6.698 -6.084v.006h.296c-1.991 1.916 -2.377 5.03 -.918 7.405c1.459 2.374 4.346 3.33 6.865 2.275a6.888 6.888 0 0 1 -2.777 3.314",
      },
      { r: "rise", a: 2 },
    ],
  ],
});
