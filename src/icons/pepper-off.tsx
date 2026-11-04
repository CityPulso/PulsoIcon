import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pepper-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PepperOff = createIcon("PepperOff", "pepper-off", {
  nodes: [
    [
      "path",
      { d: "M12.59 12.59c-.77 1.418 -2.535 2.41 -4.59 2.41c-2.761 0 -5 -1.79 -5 -4a8 8 0 0 0 13.643 5.67m1.64 -2.357a7.97 7.97 0 0 0 .717 -3.313a3 3 0 0 0 -5.545 -1.59" },
      { r: "wobble", a: 4, o: [10, 13] },
    ],
    ["path", { d: "M16 8c0 -2 2 -4 4 -4" }, { r: "sway", a: 10, o: [16, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
