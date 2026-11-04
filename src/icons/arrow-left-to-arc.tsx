import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-left-to-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLeftToArc = createIcon("ArrowLeftToArc", "arrow-left-to-arc", {
  nodes: [
    ["path", { d: "M21 12h-12" }, { r: "bounce", x: -1, y: 0, a: 2, o: [15, 12] }],
    ["path", { d: "M13 16l-4 -4l4 -4" }, { r: "bounce", x: -1, y: 0, a: 2, o: [15, 12] }],
    ["path", { d: "M12 3a9 9 0 1 0 0 18" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
