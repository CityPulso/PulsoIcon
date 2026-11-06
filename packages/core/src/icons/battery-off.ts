import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryOff = icon("BatteryOff", "battery-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M11 7h6a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5m-2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h1" },
      { r: "flicker", o: [12, 12] },
    ],
  ],
  solid: [
    ["path", { d: "M 22 14 L 22 10", fill: "none" }, { r: "flicker", o: [12, 12] }],
    ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
