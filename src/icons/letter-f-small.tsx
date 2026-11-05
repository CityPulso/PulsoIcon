import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-f-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterFSmall = createIcon("LetterFSmall", "letter-f-small", {
  text: true,
  nodes: [
    ["path", { d: "M10 12h3" }, { r: "draw" }],
    ["path", { d: "M14 8h-4v8" }, { r: "draw", d: 0.12 }],
  ],
});
