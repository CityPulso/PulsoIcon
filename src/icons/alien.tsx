import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alien" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Alien = createIcon("Alien", "alien", {
  nodes: [
    ["path", { d: "M11 17a2.5 2.5 0 0 0 2 0" }, { r: "wobble", o: [12, 12] }],
    [
      "path",
      {
        d: "M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595l-.004 0",
      },
      { r: "wobble", o: [12, 12] },
    ],
    ["path", { d: "M8 11l2 2" }, { r: "blink", d: 0.2, o: [9, 12] }],
    ["path", { d: "M16 11l-2 2" }, { r: "blink", d: 0.2, o: [15, 12] }],
  ],
});
