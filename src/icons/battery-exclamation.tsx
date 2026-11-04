import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryExclamation = createIcon("BatteryExclamation", "battery-exclamation", {
  nodes: [
    [
      "path",
      {
        d: "M9 17h8c1.105 0 2 -.895 2 -2v-.5c0 -.276 .224 -.5 .5 -.5s.5 -.224 .5 -.5v-3c0 -.276 -.224 -.5 -.5 -.5s-.5 -.224 -.5 -.5v-.5c0 -1.105 -.895 -2 -2 -2h-11c-1.105 0 -2 .895 -2 2v3",
      },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M5 16v3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M5 22v.01" }, { r: "pop", d: 0.4, o: [5, 22] }],
  ],
});
