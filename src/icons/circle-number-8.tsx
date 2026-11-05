import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-number-8" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleNumber8 = createIcon("CircleNumber8", "circle-number-8", {
  text: true,
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    [
      "path",
      { d: "M12 12h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" },
      { r: "draw", d: 0.1 },
    ],
  ],
});
