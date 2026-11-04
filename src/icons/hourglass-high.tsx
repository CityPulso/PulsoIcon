import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hourglass-high" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HourglassHigh = createIcon("HourglassHigh", "hourglass-high", {
  nodes: [
    ["path", { d: "M6.5 7h11" }, { r: "slide", y: 1, a: 2 }],
    ["path", { d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" }],
    ["path", { d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" }],
  ],
});
