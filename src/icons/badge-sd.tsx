import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-sd" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgeSd = createIcon("BadgeSd", "badge-sd", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" }, { r: "draw", d: 0.25 }],
    [
      "path",
      { d: "M7 14.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" },
      { r: "draw", d: 0.1 },
    ],
  ],
});
