import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockPause = icon("ClockPause", "clock-pause", {
  nodes: [
    ["path", { d: "M20.942 13.018a9 9 0 1 0 -7.909 7.922" }],
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
