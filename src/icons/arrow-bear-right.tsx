import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-bear-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBearRight = createIcon("ArrowBearRight", "arrow-bear-right", {
  nodes: [
    ["path", { d: "M12 3h5v5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [15, 5] }],
    ["path", { d: "M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" }, { r: "draw", o: [12, 12] }],
  ],
});
