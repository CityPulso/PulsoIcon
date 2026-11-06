import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-vertical-eco" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatteryVerticalEco = icon("BatteryVerticalEco", "battery-vertical-eco", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-8 12c-1.105 0 -2 -.895 -2 -2" },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M13 17.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333l0 -.857" }, { r: "sway", d: 0.05, o: [13, 20] }],
    ["path", { d: "M13 21v-3" }, { r: "sway", d: 0.05, o: [13, 20] }],
  ],
});
