import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-letter-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedLetterX = createIcon("SquareRoundedLetterX", "square-rounded-letter-x", {
  text: true,
  nodes: [
    ["path", { d: "M10 8l4 8" }, { r: "draw" }],
    ["path", { d: "M10 16l4 -8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
