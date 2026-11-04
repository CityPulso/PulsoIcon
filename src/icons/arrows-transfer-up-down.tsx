import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-transfer-up-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsTransferUpDown = createIcon("ArrowsTransferUpDown", "arrows-transfer-up-down", {
  nodes: [
    ["path", { d: "M7 21v-6" }, { r: "slide", y: 1, a: 1.5, o: [7, 18] }],
    ["path", { d: "M20 6l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 4.5] }],
    ["path", { d: "M10 18l-3 3l-3 -3" }, { r: "slide", y: 1, a: 1.5, o: [7, 19.5] }],
    ["path", { d: "M7 3v2" }, { r: "fade", d: 0.2, o: [7, 4] }],
    ["path", { d: "M7 9v2" }, { r: "fade", d: 0.15, o: [7, 10] }],
    ["path", { d: "M17 3v6" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 6] }],
    ["path", { d: "M17 21v-2" }, { r: "fade", d: 0.2, o: [17, 20] }],
    ["path", { d: "M17 15v-2" }, { r: "fade", d: 0.15, o: [17, 14] }],
  ],
});
