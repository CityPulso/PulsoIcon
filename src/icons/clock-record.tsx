import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-record" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockRecord = createIcon("ClockRecord", "clock-record", {
  nodes: [
    ["path", { d: "M21 12.3a9 9 0 1 0 -8.683 8.694" }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", a: 0.2, o: [19, 19] }],
  ],
});
