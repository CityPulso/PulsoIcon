import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryOff = createIcon("BatteryOff", "battery-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M11 7h6a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5m-2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h1" },
      { r: "flicker", o: [12, 12] },
    ],
  ],
});
