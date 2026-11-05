import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-a-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterASmall = createIcon("LetterASmall", "letter-a-small", {
  text: true,
  nodes: [
    ["path", { d: "M10 16v-6a2 2 0 1 1 4 0v6" }, { r: "draw" }],
    ["path", { d: "M10 13h4" }, { r: "draw", d: 0.12 }],
  ],
});
