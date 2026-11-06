import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-edit" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockEdit = icon("ClockEdit", "clock-edit", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052" }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" }, { r: "tilt", a: 12, o: [15, 22] }],
  ],
});
