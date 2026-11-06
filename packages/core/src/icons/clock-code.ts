import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockCode = icon("ClockCode", "clock-code", {
  nodes: [
    ["path", { d: "M20.931 13.111a9 9 0 1 0 -9.453 7.874" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
