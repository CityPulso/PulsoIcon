import { icon } from "../icon.js";

// Adapted from Tabler Icons "tower-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TowerOff = icon("TowerOff", "tower-off", {
  nodes: [
    [
      "path",
      {
        d: "M10 6v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v4.394a2 2 0 0 1 -.336 1.11l-1.328 1.992a2 2 0 0 0 -.336 1.11v1.394m0 4v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-7.394a2 2 0 0 0 -.336 -1.11l-1.328 -1.992a2 2 0 0 1 -.336 -1.11v-4.394",
      },
      { r: "float", o: [12, 12] },
    ],
    ["path", { d: "M10 21v-5a2 2 0 1 1 4 0v5" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M5 8V3h2.5v2H10V3h4v2h2.5V3H19v5Z" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M7 8v 13", fill: "none" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M17 8v 13", fill: "none" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M4 21h16", fill: "none" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M10 21v-3a2 2 0 0 1 4 0v3" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
