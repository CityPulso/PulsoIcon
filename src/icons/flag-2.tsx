import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "flag-2" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Flag2 = createIcon("Flag2", "flag-2", {
  nodes: [["path", { d: "M5 14h14v-9h-14v16" }, { r: "swing", a: 6, o: [5, 21] }]],
  solid: [
    [
      "path",
      {
        d: "M19 4a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z",
        stroke: "none",
      },
      { r: "swing", a: 6, o: [5, 21] },
    ],
  ],
});
