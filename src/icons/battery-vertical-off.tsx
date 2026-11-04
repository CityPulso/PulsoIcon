import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-vertical-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalOff = createIcon("BatteryVerticalOff", "battery-vertical-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M17 13v-6a2 2 0 0 0 -2 -2h-.5a.5 .5 0 0 1 -.5 -.5a.5 .5 0 0 0 -.5 -.5h-3a.5 .5 0 0 0 -.5 .5a.5 .5 0 0 1 -.5 .5h-.5m-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1" },
      { r: "flicker", o: [12, 12] },
    ],
  ],
});
