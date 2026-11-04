import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-right-tail" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRightTail = createIcon("ArrowRightTail", "arrow-right-tail", {
  nodes: [
    ["path", { d: "M18 15l3 -3l-3 -3" }, { r: "slide", x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "M3 15l3 -3l-3 -3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M6 12l15 0" }, { r: "slide", x: 1, a: 1.5, o: [13, 12] }],
  ],
});
