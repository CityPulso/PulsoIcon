import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Search = createIcon("Funnel2Search", "funnel-2-search", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h8.5" }],
    ["path", { d: "M9 18h2" }],
    [
      "path",
      {
        d: "M15 18c0 .796 .316 1.559 .879 2.121c.563 .563 1.326 .879 2.121 .879c.796 0 1.559 -.316 2.121 -.879c.563 -.563 .879 -1.326 .879 -2.121c0 -.796 -.316 -1.559 -.879 -2.121c-.563 -.563 -1.326 -.879 -2.121 -.879c-.796 0 -1.559 .316 -2.121 .879c-.563 .563 -.879 1.326 -.879 2.121",
      },
      { r: "tilt", a: 12, o: [18, 18] },
    ],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", a: 12, o: [18, 18] }],
  ],
});
