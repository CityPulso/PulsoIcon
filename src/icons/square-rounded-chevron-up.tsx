import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-chevron-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedChevronUp = createIcon("SquareRoundedChevronUp", "square-rounded-chevron-up", {
  nodes: [
    ["path", { d: "M9 13l3 -3l3 3" }, { r: "bounce", x: 0, y: -1, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
