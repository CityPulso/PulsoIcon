import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockPin = icon("ClockPin", "clock-pin", {
  nodes: [
    ["path", { d: "M20.971 11.278a9 9 0 1 0 -8.313 9.698" }],
    ["path", { d: "M12 7v5l1.5 1.5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
  ],
});
