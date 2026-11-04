import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cake-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CakeOff = createIcon("CakeOff", "cake-off", {
  nodes: [
    ["path", { d: "M21 17v-5a3 3 0 0 0 -3 -3h-5m-4 0h-3a3 3 0 0 0 -3 3v8h17" }, { r: "pulse", a: 0.03, o: [12, 20] }],
    [
      "path",
      {
        d: "M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1m4 0a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197",
      },
    ],
    ["path", { d: "M10.172 6.188c.07 -.158 .163 -.31 .278 -.451l1.55 -1.737l1.465 1.638a2 2 0 0 1 -.65 3.19" }, { r: "flicker", o: [12, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
