import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "time-duration-45" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TimeDuration45 = createIcon("TimeDuration45", "time-duration-45", {
  nodes: [
    ["path", { d: "M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 9v2a1 1 0 0 0 1 1h1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M10 9v6" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M7.5 4.2v.01" }, { r: "pop", d: 0.0, a: 0.6, o: [7.5, 4.2] }],
    ["path", { d: "M4.2 7.5v.01" }, { r: "pop", d: 0.03, a: 0.6, o: [4.2, 7.5] }],
    ["path", { d: "M3 12a9 9 0 1 0 9 -9" }, { r: "draw" }],
  ],
});
