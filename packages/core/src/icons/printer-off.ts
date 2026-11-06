import { icon } from "../icon.js";

// Adapted from Tabler Icons "printer-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PrinterOff = icon("PrinterOff", "printer-off", {
  nodes: [
    ["path", { d: "M20.412 16.416c.363 -.362 .588 -.863 .588 -1.416v-4a2 2 0 0 0 -2 -2h-6m-4 0h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M17 9v-4a2 2 0 0 0 -2 -2h-6c-.551 0 -1.05 .223 -1.412 .584m-.588 3.416v2" }],
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2", fill: "none" }],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", fill: "none" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
