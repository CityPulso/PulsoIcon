import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "direction-sign-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DirectionSignOff = createIcon("DirectionSignOff", "direction-sign-off", {
  nodes: [
    [
      "path",
      {
        d: "M18.73 14.724l1.949 -1.95a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-1.95 1.95m-2.01 2.01l-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427 .428 1.12 .428 1.548 0l3.95 -3.95",
      },
      { r: "swing", o: [12, 21] },
    ],
    ["path", { d: "M8 12h4" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M13.748 13.752l-1.748 1.748" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
