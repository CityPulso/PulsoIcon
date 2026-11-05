import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-number-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedNumber3 = createIcon("SquareRoundedNumber3", "square-rounded-number-3", {
  text: true,
  nodes: [
    ["path", { d: "M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
