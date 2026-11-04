import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "masks-theater-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MasksTheaterOff = createIcon("MasksTheaterOff", "masks-theater-off", {
  nodes: [
    [
      "path",
      { d: "M13 9c.058 0 .133 0 .192 0h6.616a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718a3.99 3.99 0 0 1 -2.71 1.058h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182" },
      { r: "tilt", a: 6, o: [17, 15] },
    ],
    ["path", { d: "M18 13h.01" }, { r: "tilt", a: 6, o: [17, 15] }],
    ["path", { d: "M15 16.5c.657 .438 1.313 .588 1.97 .451" }, { r: "tilt", a: 6, o: [17, 15] }],
    [
      "path",
      { d: "M8.632 15.982a4.05 4.05 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 .514 -1.531a1.99 1.99 0 0 1 1.286 -.652m4 0h2.808a2 2 0 0 1 2 2" },
      { r: "tilt", d: 0.1, a: -6, o: [7, 10] },
    ],
    ["path", { d: "M6 8h.01" }, { r: "tilt", d: 0.1, a: -6, o: [7, 10] }],
    ["path", { d: "M6 12c.764 -.51 1.528 -.63 2.291 -.36" }, { r: "tilt", d: 0.1, a: -6, o: [7, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
