import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "balloon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BalloonOff = createIcon("BalloonOff", "balloon-off", {
  nodes: [
    ["path", { d: "M14 8a2 2 0 0 0 -2 -2" }, { r: "float", y: -1, a: 1.5, o: [12, 9] }],
    [
      "path",
      {
        d: "M7.762 3.753a6 6 0 0 1 10.238 4.247c0 1.847 -.37 3.564 -1.007 4.993m-1.59 2.42c-.967 1 -2.14 1.587 -3.403 1.587c-3.314 0 -6 -4.03 -6 -9c0 -.593 .086 -1.166 .246 -1.707",
      },
      { r: "float", y: -1, a: 1.5, o: [12, 9] },
    ],
    ["path", { d: "M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" }, { r: "sway", o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
