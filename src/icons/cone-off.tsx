import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cone-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ConeOff = createIcon("ConeOff", "cone-off", {
  nodes: [
    [
      "path",
      { d: "M20.396 16.384l-7.526 -13.877a1 1 0 0 0 -1.74 0l-1.626 2.998m-1.407 2.594l-5.097 9.398v.5c0 1.66 4.03 3.003 9 3.003c3.202 0 6.014 -.558 7.609 -1.398" },
      { r: "wobble", o: [12, 20] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
