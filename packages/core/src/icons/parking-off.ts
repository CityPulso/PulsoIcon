import { icon } from "../icon.js";

// Adapted from Tabler Icons "parking-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ParkingOff = icon("ParkingOff", "parking-off", {
  nodes: [
    [
      "path",
      { d: "M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41c-.362 .365 -.864 .59 -1.418 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" },
      { r: "pulse", a: 0.03, o: [12, 12] },
    ],
    ["path", { d: "M9 16v-7m3 -1h1a2 2 0 0 1 1.817 2.836m-2.817 1.164h-3" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" }, { r: "draw", d: 0.2, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
