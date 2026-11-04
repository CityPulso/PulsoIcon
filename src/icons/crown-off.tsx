import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "crown-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CrownOff = createIcon("CrownOff", "crown-off", {
  nodes: [
    [
      "path",
      { d: "M18 18h-13l-1.865 -9.327a.25 .25 0 0 1 .4 -.244l4.465 3.571l1.6 -2.4m1.596 -2.394l.804 -1.206l4 6l4.464 -3.571a.25 .25 0 0 1 .401 .244l-1.363 6.818" },
      { r: "float", o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
