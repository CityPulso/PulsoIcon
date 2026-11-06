import { icon } from "../icon.js";

// Adapted from Tabler Icons "table-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableOff = icon("TableOff", "table-off", {
  nodes: [
    ["path", { d: "M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413a1.994 1.994 0 0 1 -1.415 .587h-14a2 2 0 0 1 -2 -2v-14c0 -.55 .223 -1.05 .583 -1.412" }],
    ["path", { d: "M3 10h7m4 0h7" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 3v3m0 4v11" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 3v18" }, { r: "fade", o: [12, 12] }, "line"],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M3 15h18" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
