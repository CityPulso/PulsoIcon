import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "time-duration-90" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TimeDuration90 = createIcon("TimeDuration90", "time-duration-90", {
  nodes: [
    [
      "path",
      { d: "M8 14.25c0 .414 .336 .75 .75 .75h1.5a.75 .75 0 0 0 .75 -.75v-4.5a.75 .75 0 0 0 -.75 -.75h-1.5a.75 .75 0 0 0 -.75 .75v1.5c0 .414 .336 .75 .75 .75h2.25" },
      { r: "draw", d: 0.15 },
    ],
    ["path", { d: "M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
