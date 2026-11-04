import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clef-staff" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClefStaff = createIcon("ClefStaff", "clef-staff", {
  nodes: [
    ["path", { d: "M15 15h6" }, { r: "growX", d: 0.2, o: [15, 15] }],
    ["path", { d: "M15 11h6" }, { r: "growX", d: 0.1, o: [15, 11] }],
    ["path", { d: "M11 19h10" }, { r: "growX", d: 0.3, o: [11, 19] }],
    [
      "path",
      {
        d: "M11 12a4.16 4.16 0 0 1 -5.62 3.89a3.78 3.78 0 0 1 -2.38 -3.39a3.42 3.42 0 0 1 2.34 -3.38l3.79 -1.42a2.89 2.89 0 0 0 1.87 -2.7a2 2 0 0 0 -2 -2a2 2 0 0 0 -2 2v14a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2",
      },
      { r: "draw", o: [7, 12] },
    ],
  ],
});
