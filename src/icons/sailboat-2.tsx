import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sailboat-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Sailboat2 = createIcon("Sailboat2", "sailboat-2", {
  nodes: [
    [
      "path",
      {
        d: "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
      },
      { r: "slide", x: 1, a: 1 },
    ],
    ["path", { d: "M4 18l-1 -3h18l-1 3" }, { r: "sway", a: 5, o: [12, 18] }],
    ["path", { d: "M12 11v4" }, { r: "sway", a: 5, o: [12, 18] }],
    ["path", { d: "M7 3c1.333 2.667 1.333 5.333 0 8h10c1.333 -2.667 1.333 -5.333 0 -8" }, { r: "sway", a: 5, o: [12, 18] }],
    ["path", { d: "M6 3h12" }, { r: "sway", a: 5, o: [12, 18] }],
  ],
});
