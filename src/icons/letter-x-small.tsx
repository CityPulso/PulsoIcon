import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-x-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterXSmall = createIcon("LetterXSmall", "letter-x-small", {
  text: true,
  nodes: [
    ["path", { d: "M10 8l4 8" }, { r: "draw" }],
    ["path", { d: "M10 16l4 -8" }, { r: "draw", d: 0.12 }],
  ],
});
