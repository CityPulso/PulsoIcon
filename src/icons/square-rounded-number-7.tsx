import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-number-7" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedNumber7 = createIcon("SquareRoundedNumber7", "square-rounded-number-7", {
  nodes: [
    ["path", { d: "M10 8h4l-2 8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
