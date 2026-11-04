import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ship-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShipOff = createIcon("ShipOff", "ship-off", {
  nodes: [
    [
      "path",
      {
        d: "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
      },
      { r: "slide", d: 0, x: 1, y: 0, a: 1 },
    ],
    ["path", { d: "M4 18l-1 -5h10m4 0h4l-1.334 2.668" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M5 13v-6h2m4 0h2l4 6" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
