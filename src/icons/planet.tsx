import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "planet" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Planet = createIcon("Planet", "planet", {
  nodes: [
    [
      "path",
      { d: "M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" },
      { r: "tilt", a: 12, o: [12, 12] },
    ],
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
  ],
});
