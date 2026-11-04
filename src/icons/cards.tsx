import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cards" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cards = createIcon("Cards", "cards", {
  nodes: [
    [
      "path",
      {
        d: "M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304l0 .001",
      },
      { r: "tilt", a: 8, o: [10, 19] },
    ],
    ["path", { d: "M15 4h1a1 1 0 0 1 1 1v3.5" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" }, { r: "slide", d: 0.15, x: 1, y: 0, a: 1 }],
  ],
});
