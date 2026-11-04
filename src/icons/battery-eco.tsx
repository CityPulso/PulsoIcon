import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-eco" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryEco = createIcon("BatteryEco", "battery-eco", {
  nodes: [
    [
      "path",
      { d: "M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-5.5" },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M3 16.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333v-.857" }, { r: "sway", d: 0.05, o: [3, 19] }],
    ["path", { d: "M3 20v-3" }, { r: "sway", d: 0.05, o: [3, 19] }],
  ],
});
