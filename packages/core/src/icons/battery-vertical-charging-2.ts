import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-vertical-charging-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalCharging2 = icon("BatteryVerticalCharging2", "battery-vertical-charging-2", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-10 10c0 1.105 .895 2 2 2h1" },
      { r: "pulse", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M12 14h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" }, { r: "bounce", y: -1, a: 1, o: [15, 16] }],
    ["path", { d: "M15 21v-3" }, { r: "bounce", y: -1, a: 1, o: [15, 16] }],
    ["path", { d: "M13 14v-2.5" }, { r: "bounce", y: -1, a: 1, o: [15, 16] }],
    ["path", { d: "M17 14v-2.5" }, { r: "bounce", y: -1, a: 1, o: [15, 16] }],
  ],
});
