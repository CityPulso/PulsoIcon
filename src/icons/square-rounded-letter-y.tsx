import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-letter-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedLetterY = createIcon("SquareRoundedLetterY", "square-rounded-letter-y", {
  text: true,
  nodes: [
    ["path", { d: "M10 8l2 5l2 -5" }, { r: "draw" }],
    ["path", { d: "M12 16v-3" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
