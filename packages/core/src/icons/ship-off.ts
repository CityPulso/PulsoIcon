import { icon } from "../icon.js";

// Adapted from Tabler Icons "ship-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShipOff = icon("ShipOff", "ship-off", {
  nodes: [
    [
      "path",
      {
        d: "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
      },
      { r: "slide", d: 0, x: 1, y: 0, a: 1 },
    ],
    ["path", { d: "M4 18l-1 -5h10m4 0h4l-1.334 2.668" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M5 13v-6h2m4 0h2l4 6" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 2v2", fill: "none" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M12 9.189V13" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }, "line"],
    ["path", { d: "M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6", fill: "none" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
