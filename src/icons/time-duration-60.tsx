import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "time-duration-60" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TimeDuration60 = createIcon("TimeDuration60", "time-duration-60", {
  nodes: [
    ["path", { d: "M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M11 9h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
