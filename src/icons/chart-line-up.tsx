import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chart-line-up" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChartLineUp = createIcon("ChartLineUp", "chart-line-up", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "m7 16 4-4 3 3 5-5" }, { r: "draw", o: [13, 13] }],
    ["path", { d: "M15 10h4v4" }, { r: "slide", d: 0.2, x: 1, y: -1, a: 1.5, o: [17, 12] }],
  ],
});
