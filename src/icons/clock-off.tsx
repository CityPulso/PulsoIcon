import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockOff = createIcon("ClockOff", "clock-off", {
  nodes: [
    ["path", { d: "M5.633 5.64a9 9 0 1 0 12.735 12.72m1.674 -2.32a9 9 0 0 0 -12.082 -12.082" }],
    ["path", { d: "M12 7v1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
