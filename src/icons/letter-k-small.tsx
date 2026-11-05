import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-k-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterKSmall = createIcon("LetterKSmall", "letter-k-small", {
  text: true,
  nodes: [
    ["path", { d: "M10.5 8v8" }, { r: "draw" }],
    ["path", { d: "M14.5 8l-3 4l3 4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10.5 12h1" }, { r: "draw", d: 0.24 }],
  ],
});
