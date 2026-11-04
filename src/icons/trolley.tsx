import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "trolley" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Trolley = createIcon("Trolley", "trolley", {
  nodes: [
    ["path", { d: "M9 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [11, 19] }],
    ["path", { d: "M6 16l3 2" }],
    ["path", { d: "M12 17l8 -12" }, { r: "tilt", a: 5, o: [11, 19] }],
    ["path", { d: "M17 10l2 1" }],
    [
      "path",
      { d: "M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394" },
      { r: "bounce", y: -1, a: 1.5 },
    ],
  ],
});
