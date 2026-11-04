import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "quote-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const QuoteOff = createIcon("QuoteOff", "quote-off", {
  nodes: [
    ["path", { d: "M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1m4 4v3c0 2.667 -1.333 4.333 -4 5" }, { r: "pop", d: 0, o: [7, 12] }],
    [
      "path",
      { d: "M19 11h-4m-1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 .66 -.082 1.26 -.245 1.798m-1.653 2.29c-.571 .4 -1.272 .704 -2.102 .912" },
      { r: "pop", d: 0.1, o: [17, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
