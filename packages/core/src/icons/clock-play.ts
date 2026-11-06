import { icon } from "../icon.js";

// Adapted from Tabler Icons "clock-play" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockPlay = icon("ClockPlay", "clock-play", {
  nodes: [
    ["path", { d: "M12 7v5l2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M17 22l5 -3l-5 -3l0 6" }, { r: "press", a: 0.2, o: [19, 19] }],
    ["path", { d: "M13.017 20.943a9 9 0 1 1 7.831 -7.292" }],
  ],
});
