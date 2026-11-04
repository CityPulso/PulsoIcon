import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-south" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapSouth = createIcon("MapSouth", "map-south", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    [
      "path",
      { d: "M10 14.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75" },
      { r: "draw", d: 0.1 },
    ],
  ],
});
