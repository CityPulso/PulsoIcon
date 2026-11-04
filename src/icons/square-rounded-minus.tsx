import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedMinus = createIcon("SquareRoundedMinus", "square-rounded-minus", {
  nodes: [
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
  ],
});
