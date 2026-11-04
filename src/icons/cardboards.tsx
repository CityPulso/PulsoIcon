import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cardboards" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cardboards = createIcon("Cardboards", "cardboards", {
  nodes: [
    [
      "path",
      {
        d: "M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2",
      },
      { r: "float", d: 0, a: 1, o: [12, 12] },
    ],
    ["path", { d: "M7 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "blink", d: 0.1, o: [8, 12] }],
    ["path", { d: "M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "blink", d: 0.1, o: [16, 12] }],
  ],
});
