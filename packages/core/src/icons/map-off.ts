import { icon } from "../icon.js";

// Adapted from Tabler Icons "map-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapOff = icon("MapOff", "map-off", {
  nodes: [
    ["path", { d: "M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M9 4v1m0 4v8" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M15 7v4m0 4v5" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      },
      { r: "fold", o: [12, 12] },
    ],
    ["path", { d: "M15 5.764v15" }, { r: "fold", o: [12, 12] }, "line"],
    ["path", { d: "M9 3.236v15" }, { r: "fold", o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
