import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sun-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SunOff = createIcon("SunOff", "sun-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" }, { r: "spin", d: 0, o: [12, 12] }],
  ],
});
