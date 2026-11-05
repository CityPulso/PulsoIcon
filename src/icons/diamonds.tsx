import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "diamonds" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "diamonds" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Diamonds = createIcon("Diamonds", "diamonds", {
  nodes: [
    [
      "path",
      {
        d: "M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0",
      },
      { r: "twinkle", d: 0, o: [12, 12] },
    ],
  ],
  solid: [
    [
      "path",
      {
        d: "M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z",
        stroke: "none",
      },
      { r: "twinkle", d: 0, o: [12, 12] },
    ],
  ],
});
