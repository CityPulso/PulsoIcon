import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-h-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterHSmall = createIcon("LetterHSmall", "letter-h-small", {
  text: true,
  nodes: [
    ["path", { d: "M10 16v-8" }, { r: "draw" }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10 12h4" }, { r: "draw", d: 0.24 }],
  ],
});
