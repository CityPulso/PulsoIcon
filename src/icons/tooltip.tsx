import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tooltip" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tooltip = createIcon("Tooltip", "tooltip", {
  nodes: [
    ["path", { d: "M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", a: 0.2, o: [12, 18] }],
    [
      "path",
      { d: "M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707" },
      { r: "pop", d: 0.1, a: 0.15, o: [12, 8.5] },
    ],
  ],
});
