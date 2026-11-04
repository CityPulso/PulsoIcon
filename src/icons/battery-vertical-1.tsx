import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-vertical-1" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVertical1 = createIcon("BatteryVertical1", "battery-vertical-1", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" },
      { r: "pulse", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M10 17h4" }, { r: "flicker", d: 0.05, o: [12, 17] }],
  ],
});
