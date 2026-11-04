import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockQuestion = createIcon("ClockQuestion", "clock-question", {
  nodes: [
    ["path", { d: "M20.975 11.33a9 9 0 1 0 -5.717 9.06" }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.05 }],
  ],
});
