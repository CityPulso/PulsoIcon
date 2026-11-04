import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-chevrons-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedChevronsLeft = createIcon("SquareRoundedChevronsLeft", "square-rounded-chevrons-left", {
  nodes: [
    ["path", { d: "M15 15l-3 -3l3 -3" }, { r: "bounce", x: -1, y: 0, o: [12, 12] }],
    ["path", { d: "M11 15l-3 -3l3 -3" }, { r: "bounce", d: 0.1, x: -1, y: 0, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
