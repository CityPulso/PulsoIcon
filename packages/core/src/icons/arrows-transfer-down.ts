import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-transfer-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsTransferDown = icon("ArrowsTransferDown", "arrows-transfer-down", {
  nodes: [
    ["path", { d: "M17 3v6" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 6] }],
    ["path", { d: "M10 18l-3 3l-3 -3" }, { r: "slide", y: 1, a: 1.5, o: [7, 19.5] }],
    ["path", { d: "M7 21v-18" }, { r: "slide", y: 1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M20 6l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 4.5] }],
    ["path", { d: "M17 21v-2" }, { r: "fade", d: 0.2, o: [17, 20] }],
    ["path", { d: "M17 15v-2" }, { r: "fade", d: 0.15, o: [17, 14] }],
  ],
});
