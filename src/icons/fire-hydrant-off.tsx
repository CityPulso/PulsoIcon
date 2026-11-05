import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fire-hydrant-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FireHydrantOff = createIcon("FireHydrantOff", "fire-hydrant-off", {
  nodes: [
    ["path", { d: "M5 21h14" }],
    [
      "path",
      { d: "M17 21v-4m2 -2v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -8.533 -3.538m-1.387 2.638a5.03 5.03 0 0 0 -.08 .9v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" },
      { r: "pulse", a: 0.03, o: [12, 13] },
    ],
    ["path", { d: "M12 12a2 2 0 1 0 2 2" }, { r: "spin", a: 90, o: [12, 14] }],
    ["path", { d: "M6 8h2m4 0h6" }, { r: "pulse", a: 0.03, o: [12, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M5 21h14", fill: "none" }],
    ["path", { d: "M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" }, { r: "pulse", a: 0.03, o: [12, 13] }],
    ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 90, o: [12, 14] }, "cut"],
    ["path", { d: "M6 8h12" }, { r: "pulse", a: 0.03, o: [12, 13] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
