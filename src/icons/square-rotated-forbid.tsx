import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rotated-forbid" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRotatedForbid = createIcon("SquareRotatedForbid", "square-rotated-forbid", {
  nodes: [
    [
      "path",
      {
        d: "M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M9.5 14.5l5 -5" }, { r: "draw", d: 0.1 }],
  ],
});
