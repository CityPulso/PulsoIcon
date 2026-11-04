import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "roller-skating" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RollerSkating = createIcon("RollerSkating", "roller-skating", {
  nodes: [
    [
      "path",
      {
        d: "M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -1 -1.1l.8 -8a1 1 0 0 1 1 -.9",
      },
      { r: "slide", x: 1, a: 1 },
    ],
    ["path", { d: "M6 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [8, 17] }],
    ["path", { d: "M14 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [16, 17] }],
  ],
});
