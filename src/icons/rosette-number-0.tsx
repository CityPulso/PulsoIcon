import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rosette-number-0" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RosetteNumber0 = createIcon("RosetteNumber0", "rosette-number-0", {
  text: true,
  nodes: [
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.1 }],
    [
      "path",
      {
        d: "M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1",
      },
      { r: "spin", a: 90, o: [12, 12] },
    ],
  ],
});
