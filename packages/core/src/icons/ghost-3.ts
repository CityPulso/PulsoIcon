import { icon } from "../icon.js";

// Adapted from Tabler Icons "ghost-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ghost3 = icon("Ghost3", "ghost-3", {
  nodes: [
    [
      "path",
      { d: "M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" },
      { r: "float", a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M10 10h.01" }, { r: "blink", d: 0.2, o: [12, 10] }],
    ["path", { d: "M14 10h.01" }, { r: "blink", d: 0.2, o: [12, 10] }],
  ],
});
