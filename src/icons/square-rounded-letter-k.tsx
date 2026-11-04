import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-letter-k" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedLetterK = createIcon("SquareRoundedLetterK", "square-rounded-letter-k", {
  nodes: [
    ["path", { d: "M10 8v8" }, { r: "draw" }],
    ["path", { d: "M14 8l-2.5 4l2.5 4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10 12h1.5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
