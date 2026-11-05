import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-number-6" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedNumber6 = createIcon("SquareRoundedNumber6", "square-rounded-number-6", {
  text: true,
  nodes: [
    ["path", { d: "M14 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
