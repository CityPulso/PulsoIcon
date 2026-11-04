import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-vertical-charging" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalCharging = createIcon("BatteryVerticalCharging", "battery-vertical-charging", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" },
      { r: "pulse", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M12.667 8l-2.667 4h4l-2.667 4" }, { r: "flicker", d: 0.1 }],
  ],
});
