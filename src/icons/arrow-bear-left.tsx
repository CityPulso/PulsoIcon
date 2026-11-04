import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-bear-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBearLeft = createIcon("ArrowBearLeft", "arrow-bear-left", {
  nodes: [
    ["path", { d: "M13 3h-5v5" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [9, 5] }],
    ["path", { d: "M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" }, { r: "drawBack", o: [12, 12] }],
  ],
});
