import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockSearch = createIcon("ClockSearch", "clock-search", {
  nodes: [
    ["path", { d: "M20.993 11.646a9 9 0 1 0 -9.318 9.348" }],
    ["path", { d: "M12 7v5l1 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", a: 14, o: [18, 18] }],
  ],
});
