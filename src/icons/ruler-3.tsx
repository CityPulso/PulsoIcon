import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ruler-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ruler3 = createIcon("Ruler3", "ruler-3", {
  nodes: [
    [
      "path",
      { d: "M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M9 8v2" }, { r: "grow", d: 0.1, o: [9, 8] }],
    ["path", { d: "M6 8v3" }, { r: "grow", d: 0.05, o: [6, 8] }],
    ["path", { d: "M12 8v3" }, { r: "grow", d: 0.15, o: [12, 8] }],
    ["path", { d: "M18 8v3" }, { r: "grow", d: 0.25, o: [18, 8] }],
    ["path", { d: "M15 8v2" }, { r: "grow", d: 0.2, o: [15, 8] }],
  ],
});
