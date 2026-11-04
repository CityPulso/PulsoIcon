import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "swipe" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Swipe = createIcon("Swipe", "swipe", {
  nodes: [
    [
      "path",
      { d: "M15 16.572v2.42a2.01 2.01 0 0 1 -2.009 2.008h-7.981a2.01 2.01 0 0 1 -2.01 -2.009v-7.981a2.01 2.01 0 0 1 2.009 -2.01h2.954" },
      { r: "slide", d: 0.08, x: 1, y: -0.3, a: 1, o: [9, 15] },
    ],
    [
      "path",
      {
        d: "M9.167 4.511a2.04 2.04 0 0 1 2.496 -1.441l7.826 2.097a2.04 2.04 0 0 1 1.441 2.496l-2.097 7.826a2.04 2.04 0 0 1 -2.496 1.441l-7.827 -2.097a2.04 2.04 0 0 1 -1.441 -2.496l2.098 -7.827l0 .001",
      },
      { r: "slide", x: 1, y: -0.3, a: 2.5, o: [15, 9.5] },
    ],
  ],
});
