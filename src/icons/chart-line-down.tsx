import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chart-line-down" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChartLineDown = createIcon("ChartLineDown", "chart-line-down", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "m7 7 5 5 3-3 4 4" }, { r: "draw", o: [13, 10] }],
    ["path", { d: "M19 9v4h-4" }, { r: "slide", d: 0.2, x: 1, y: 1, a: 1.5, o: [17, 11] }],
  ],
});
