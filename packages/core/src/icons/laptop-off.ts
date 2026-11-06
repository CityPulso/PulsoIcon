import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-laptop-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LaptopOff = icon("LaptopOff", "laptop-off", {
  nodes: [
    ["path", { d: "M3 19h16" }],
    ["path", { d: "M10 6h8a1 1 0 0 1 1 1v8m-3 1h-10a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1" }, { r: "fold", o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      { d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" },
      { r: "fold", o: [12, 16] },
    ],
    ["path", { d: "M20.054 15.987H3.946" }, undefined, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
