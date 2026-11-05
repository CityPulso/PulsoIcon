import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alphabet-latin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlphabetLatin = createIcon("AlphabetLatin", "alphabet-latin", {
  text: true,
  nodes: [
    ["path", { d: "M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M14 7v10" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M14 12a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" }, { r: "draw", d: 0.24 }],
  ],
});
