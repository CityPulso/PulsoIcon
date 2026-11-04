import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "waterpolo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Waterpolo = createIcon("Waterpolo", "waterpolo", {
  nodes: [
    ["path", { d: "M5 8l3 4l5 1l7 -1" }],
    [
      "path",
      {
        d: "M3 18.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25",
      },
      { r: "slide", d: 0.1, x: 1, a: 1 },
    ],
    ["path", { d: "M12 16l1 -3" }],
    ["path", { d: "M11.007 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M5.007 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "bounce", y: -1, a: 2 }],
  ],
});
