import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-charging-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryCharging2 = createIcon("BatteryCharging2", "battery-charging-2", {
  nodes: [
    [
      "path",
      { d: "M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5" },
      { r: "pulse", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
    ["path", { d: "M6 22v-3" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
    ["path", { d: "M4 15v-2.5" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
    ["path", { d: "M8 15v-2.5" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
  ],
});
