import { icon } from "../icon.js";

// Adapted from Tabler Icons "gift-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GiftOff = icon("GiftOff", "gift-off", {
  nodes: [
    ["path", { d: "M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4m-4 0h-8a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h4" }, { r: "lift", y: -1, a: 1, o: [12, 10] }],
    ["path", { d: "M12 12v9" }],
    ["path", { d: "M19 12v3m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" }],
    [
      "path",
      { d: "M7.5 8a2.5 2.5 0 0 1 -2.457 -2.963m2.023 -2c.14 -.023 .286 -.037 .434 -.037c1.974 -.034 3.76 1.95 4.5 5c.74 -3.05 2.526 -5.034 4.5 -5a2.5 2.5 0 1 1 0 5" },
      { r: "lift", y: -1, a: 1.5, o: [12, 6] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 7v14" }, undefined, "line"],
    ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", fill: "none" }],
    ["path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5", fill: "none" }, { r: "lift", y: -1, a: 1.5, o: [12, 6] }],
    ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" }, { r: "lift", y: -1, a: 1, o: [12, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
