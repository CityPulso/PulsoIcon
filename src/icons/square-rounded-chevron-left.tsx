import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-chevron-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedChevronLeft = createIcon("SquareRoundedChevronLeft", "square-rounded-chevron-left", {
  nodes: [
    ["path", { d: "M13 15l-3 -3l3 -3" }, { r: "bounce", x: -1, y: 0, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
