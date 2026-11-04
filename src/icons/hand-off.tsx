import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hand-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HandOff = createIcon("HandOff", "hand-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
    [
      "path",
      {
        d: "M8 13.5v-5.5m.44 -3.562a1.5 1.5 0 0 1 2.56 1.062v1.5m0 4.008v.992m0 -6.5v-2a1.5 1.5 0 1 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2c-2.114 -.292 -3.956 -1.397 -5 -3l-2.7 -5.25a1.7 1.7 0 0 1 2.75 -2l.9 1.75",
      },
      { r: "sway", a: 6, o: [12, 20] },
    ],
  ],
});
