import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "flag-2" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Flag2Off = createIcon("Flag2Off", "flag-2-off", {
  nodes: [
    ["path", { d: "M5 14h9m4 0h1v-9h-10m-4 0v16" }, { r: "swing", a: 4, o: [5, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19 4a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z",
        stroke: "none",
      },
      { r: "swing", a: 4, o: [5, 21] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
