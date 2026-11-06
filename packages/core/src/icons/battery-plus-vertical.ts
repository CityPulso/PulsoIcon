import { icon } from "../icon.js";

// Drawn after Phosphor Icons "battery-plus-vertical" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BatteryPlusVertical = icon("BatteryPlusVertical", "battery-plus-vertical", {
  nodes: [
    [
      "path",
      { d: "M7 18v-11a2 2 0 0 1 2 -2h.5a.5 .5 0 0 0 .5 -.5a.5 .5 0 0 1 .5 -.5h3a.5 .5 0 0 1 .5 .5a.5 .5 0 0 0 .5 .5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2" },
      { r: "pulse", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M12 10v5" }, { r: "spin", d: 0.05, a: 90, o: [12, 12.5] }],
    ["path", { d: "M9.5 12.5h5" }, { r: "spin", d: 0.05, a: 90, o: [12, 12.5] }],
  ],
});
