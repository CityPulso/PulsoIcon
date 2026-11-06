import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-vertical-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "battery-vertical" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalOff = icon("BatteryVerticalOff", "battery-vertical-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M17 13v-6a2 2 0 0 0 -2 -2h-.5a.5 .5 0 0 1 -.5 -.5a.5 .5 0 0 0 -.5 -.5h-3a.5 .5 0 0 0 -.5 .5a.5 .5 0 0 1 -.5 .5h-.5m-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1" },
      { r: "flicker", o: [12, 12] },
    ],
  ],
  solid: [
    [
      "path",
      {
        d: "M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007z",
        stroke: "none",
      },
      { r: "flicker", o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
