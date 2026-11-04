import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ghost-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ghost2 = createIcon("Ghost2", "ghost-2", {
  nodes: [
    ["path", { d: "M10 9h.01" }, { r: "blink", d: 0.2, o: [12, 9] }],
    ["path", { d: "M14 9h.01" }, { r: "blink", d: 0.2, o: [12, 9] }],
    [
      "path",
      { d: "M12 3a7 7 0 0 1 7 7v1l1 0a2 2 0 1 1 0 4l-1 0v3l2 3h-10a6 6 0 0 1 -6 -5.775l0 -.226l-1 0a2 2 0 0 1 0 -4l1 0v-1a7 7 0 0 1 7 -7l0 .001" },
      { r: "float", a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M11 14h2a1 1 0 0 0 -2 0" }, { r: "float", a: 1.5, o: [12, 12] }],
  ],
});
