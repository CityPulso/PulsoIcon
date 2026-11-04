import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alphabet-devanagari" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlphabetDevanagari = createIcon("AlphabetDevanagari", "alphabet-devanagari", {
  nodes: [
    ["path", { d: "M4 5h16" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M16 5v14" }, { r: "draw", d: 0.12 }],
    [
      "path",
      { d: "M5.5 8.5c.5 -1 1.5 -1.5 2.5 -1.5c1.4 0 2.5 1 2.5 2.5s-1.1 2.5 -2.5 2.5c2 0 3.5 1.3 3.5 3.25s-1.5 3.25 -3.5 3.25c-1.2 0 -2.2 -.6 -2.8 -1.5" },
      { r: "draw", d: 0.24 },
    ],
    ["path", { d: "M8 12h8" }, { r: "draw", d: 0.36 }],
  ],
});
