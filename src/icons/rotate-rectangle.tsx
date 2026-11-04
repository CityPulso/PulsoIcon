import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rotate-rectangle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RotateRectangle = createIcon("RotateRectangle", "rotate-rectangle", {
  nodes: [
    [
      "path",
      { d: "M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988" },
      { r: "turn", a: -30, o: [12, 12] },
    ],
    ["path", { d: "M7.05 11.038v-3.988" }, { r: "turn", a: -30, o: [12, 12] }],
  ],
});
