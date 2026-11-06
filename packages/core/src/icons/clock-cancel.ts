import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockCancel = icon("ClockCancel", "clock-cancel", {
  nodes: [
    ["path", { d: "M20.997 12.25a9 9 0 1 0 -8.718 8.745" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
