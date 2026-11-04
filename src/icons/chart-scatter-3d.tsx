import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-scatter-3d" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartScatter3d = createIcon("ChartScatter3d", "chart-scatter-3d", {
  nodes: [
    ["path", { d: "M3 20l9 -7" }],
    ["path", { d: "M12 3v10l9 7" }],
    ["path", { d: "M17 12v.015" }, { r: "pop", d: 0.0, o: [17, 12] }],
    ["path", { d: "M17 4.015v.015" }, { r: "pop", d: 0.05, o: [17, 4] }],
    ["path", { d: "M21 8.015v.015" }, { r: "pop", d: 0.1, o: [21, 8] }],
    ["path", { d: "M12 19.015v.015" }, { r: "pop", d: 0.15, o: [12, 19] }],
    ["path", { d: "M3 12.015v.015" }, { r: "pop", d: 0.2, o: [3, 12] }],
    ["path", { d: "M7 8.015v.015" }, { r: "pop", d: 0.25, o: [7, 8] }],
    ["path", { d: "M3 4.015v.015" }, { r: "pop", d: 0.3, o: [3, 4] }],
  ],
});
