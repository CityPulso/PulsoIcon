import { icon } from "../icon.js";

// Adapted from Tabler Icons "cricket" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cricket = icon("Cricket", "cricket", {
  nodes: [
    [
      "path",
      {
        d: "M11.105 18.79l-1 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617",
      },
      { r: "swing", a: -14, o: [18.5, 4.5] },
    ],
    ["path", { d: "M10.5 7.5l6 6" }, { r: "swing", a: -14, o: [18.5, 4.5] }],
    ["path", { d: "M11 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "roll", d: 0.15, x: 1, a: 1.5, o: [14, 18] }],
  ],
});
