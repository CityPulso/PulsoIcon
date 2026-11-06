import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-vertical-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalExclamation = icon("BatteryVerticalExclamation", "battery-vertical-exclamation", {
  nodes: [
    [
      "path",
      {
        d: "M17 12v-5c0 -1.105 -.895 -2 -2 -2h-.5c-.276 0 -.5 -.224 -.5 -.5s-.224 -.5 -.5 -.5h-3c-.276 0 -.5 .224 -.5 .5s-.224 .5 -.5 .5h-.5c-1.105 0 -2 .895 -2 2v11c0 1.105 .895 2 2 2h6",
      },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.4, o: [19, 22] }],
  ],
});
