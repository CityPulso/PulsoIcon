import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-bubble" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartBubble = createIcon("ChartBubble", "chart-bubble", {
  nodes: [
    ["path", { d: "M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [6, 16] }],
    ["path", { d: "M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [16, 19] }],
    ["path", { d: "M10 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" }, { r: "pop", d: 0.2, o: [14.5, 7.5] }],
  ],
});
