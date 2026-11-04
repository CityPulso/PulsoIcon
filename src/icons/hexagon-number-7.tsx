import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagon-number-7" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonNumber7 = createIcon("HexagonNumber7", "hexagon-number-7", {
  nodes: [
    [
      "path",
      {
        d: "M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728 -.395 1.4 -1.032 1.753l-6.017 3.844a2 2 0 0 1 -1.948 0l-6.016 -3.844a2 2 0 0 1 -1.032 -1.752v-6.556c0 -.728 .395 -1.4 1.032 -1.753l6.017 -3.582a2.062 2.062 0 0 1 2 0l6.017 3.583h-.029l.008 0",
      },
      { r: "jelly", a: 0.08, o: [12, 12] },
    ],
    ["path", { d: "M10 8h4l-2 8" }, { r: "draw", d: 0.1 }],
  ],
});
