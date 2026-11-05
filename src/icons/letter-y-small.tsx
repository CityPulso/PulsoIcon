import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-y-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterYSmall = createIcon("LetterYSmall", "letter-y-small", {
  text: true,
  nodes: [
    ["path", { d: "M10 8l2 5l2 -5" }, { r: "draw" }],
    ["path", { d: "M12 16v-3" }, { r: "draw", d: 0.12 }],
  ],
});
