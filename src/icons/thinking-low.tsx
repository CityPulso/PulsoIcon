import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "thinking-low" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ThinkingLow = createIcon("ThinkingLow", "thinking-low", {
  nodes: [
    [
      "path",
      { d: "M17 21v-1.25c0 -2.311 .778 -1.92 2.244 -3.749a8 8 0 1 0 -14.244 -5.001q 0 .25 -1.876 3.518a1 1 0 0 0 .876 1.482h2v3a2 2 0 0 0 2 2h3" },
      { r: "wobble", d: 0, a: 3, o: [12, 12] },
    ],
    ["path", { d: "M12 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pulse", d: 0.05, a: 0.4, o: [13, 11] }],
  ],
});
