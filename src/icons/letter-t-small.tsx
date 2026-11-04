import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-t-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterTSmall = createIcon("LetterTSmall", "letter-t-small", {
  nodes: [
    ["path", { d: "M10 8h4" }, { r: "draw" }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.12 }],
  ],
});
