import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-shield" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockShield = createIcon("ClockShield", "clock-shield", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -8.98 9" }],
    ["path", { d: "M12 7v5l1 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" }, { r: "pop", o: [18.5, 18.5] }],
  ],
});
