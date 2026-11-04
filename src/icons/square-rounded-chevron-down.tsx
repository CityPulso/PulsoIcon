import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-chevron-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedChevronDown = createIcon("SquareRoundedChevronDown", "square-rounded-chevron-down", {
  nodes: [
    ["path", { d: "M15 11l-3 3l-3 -3" }, { r: "bounce", x: 0, y: 1, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
