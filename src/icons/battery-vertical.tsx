import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVertical = createIcon("BatteryVertical", "battery-vertical", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" },
      { r: "pulse", d: 0, o: [12, 12] },
    ],
  ],
});
