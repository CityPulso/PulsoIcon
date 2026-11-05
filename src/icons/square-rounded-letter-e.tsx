import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-letter-e" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedLetterE = createIcon("SquareRoundedLetterE", "square-rounded-letter-e", {
  text: true,
  nodes: [
    ["path", { d: "M14 8h-4v8h4" }, { r: "draw" }],
    ["path", { d: "M10 12h2.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
