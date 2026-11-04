import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "empathize-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EmpathizeOff = createIcon("EmpathizeOff", "empathize-off", {
  nodes: [
    ["path", { d: "M12 8a2.5 2.5 0 1 0 -2.5 -2.5" }, { r: "bounce", y: -1, a: 1, o: [12, 6] }],
    [
      "path",
      { d: "M12.317 12.315l-.317 .317l-.728 -.727a3.088 3.088 0 1 0 -4.367 4.367l5.095 5.096l4.689 -4.69m1.324 -2.673a3.087 3.087 0 0 0 -3.021 -3.018" },
      { r: "beat", o: [12, 16] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
