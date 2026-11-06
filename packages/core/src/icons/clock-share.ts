import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockShare = icon("ClockShare", "clock-share", {
  nodes: [
    ["path", { d: "M20.943 13.016a9 9 0 1 0 -8.915 7.984" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
