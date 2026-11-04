import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockX = createIcon("ClockX", "clock-x", {
  nodes: [
    ["path", { d: "M20.926 13.15a9 9 0 1 0 -7.835 7.784" }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.2 }],
  ],
});
