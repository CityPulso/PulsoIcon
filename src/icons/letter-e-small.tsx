import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-e-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterESmall = createIcon("LetterESmall", "letter-e-small", {
  nodes: [
    ["path", { d: "M14 8h-4v8h4" }, { r: "draw" }],
    ["path", { d: "M10 12h2.5" }, { r: "draw", d: 0.12 }],
  ],
});
