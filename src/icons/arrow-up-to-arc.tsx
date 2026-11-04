import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-up-to-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpToArc = createIcon("ArrowUpToArc", "arrow-up-to-arc", {
  nodes: [
    ["path", { d: "M12 21v-12" }, { r: "bounce", x: 0, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M8 13l4 -4l4 4" }, { r: "bounce", x: 0, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M21 12a9 9 0 0 0 -18 0" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
