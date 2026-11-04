import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hand-click" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HandClick = createIcon("HandClick", "hand-click", {
  nodes: [
    ["path", { d: "M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" }, { r: "press", a: 0.08, o: [12, 21] }],
    ["path", { d: "M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" }, { r: "press", a: 0.08, o: [12, 21] }],
    ["path", { d: "M14 10.5a1.5 1.5 0 0 1 3 0v1.5" }, { r: "press", a: 0.08, o: [12, 21] }],
    [
      "path",
      {
        d: "M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47",
      },
      { r: "press", a: 0.08, o: [12, 21] },
    ],
    ["path", { d: "M5 3l-1 -1" }, { r: "pop", d: 0.2, o: [4.5, 2.5] }],
    ["path", { d: "M4 7h-1" }, { r: "pop", d: 0.25, o: [3.5, 7] }],
    ["path", { d: "M14 3l1 -1" }, { r: "pop", d: 0.2, o: [14.5, 2.5] }],
    ["path", { d: "M15 6h1" }, { r: "pop", d: 0.25, o: [15.5, 6] }],
  ],
});
