import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-arrows-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartArrowsVertical = createIcon("ChartArrowsVertical", "chart-arrows-vertical", {
  nodes: [
    ["path", { d: "M18 21v-14" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 15l3 -3l3 3" }, { r: "slide", d: 0.3, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M15 10l3 -3l3 3" }, { r: "slide", d: 0.4, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M3 21l18 0" }],
    ["path", { d: "M12 21l0 -9" }, { r: "draw" }],
    ["path", { d: "M3 6l3 -3l3 3" }, { r: "slide", d: 0.5, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M6 21v-18" }, { r: "draw", d: 0.2 }],
  ],
});
