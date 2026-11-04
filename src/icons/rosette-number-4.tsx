import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rosette-number-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RosetteNumber4 = createIcon("RosetteNumber4", "rosette-number-4", {
  nodes: [
    ["path", { d: "M10 8v3a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.22 }],
    [
      "path",
      {
        d: "M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1",
      },
      { r: "spin", a: 90, o: [12, 12] },
    ],
  ],
});
