import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-right-from-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRightFromArc = createIcon("ArrowRightFromArc", "arrow-right-from-arc", {
  nodes: [
    ["path", { d: "M15 12h-12" }, { r: "shoot", x: -1, y: 0, a: 3, o: [9, 12] }],
    ["path", { d: "M7 8l-4 4l4 4" }, { r: "shoot", x: -1, y: 0, a: 3, o: [9, 12] }],
    ["path", { d: "M12 21a9 9 0 0 0 0 -18" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
