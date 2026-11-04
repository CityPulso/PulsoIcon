import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "direction-sign" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DirectionSign = createIcon("DirectionSign", "direction-sign", {
  nodes: [
    [
      "path",
      {
        d: "M3.32 12.774l7.906 7.905c.427 .428 1.12 .428 1.548 0l7.905 -7.905a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548",
      },
    ],
    ["path", { d: "M8 12h7.5" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M12 8.5l3.5 3.5l-3.5 3.5" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
