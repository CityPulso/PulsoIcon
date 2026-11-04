import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-down-from-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownFromArc = createIcon("ArrowDownFromArc", "arrow-down-from-arc", {
  nodes: [
    ["path", { d: "M12 15v-12" }, { r: "shoot", x: 0, y: -1, a: 3, o: [12, 9] }],
    ["path", { d: "M16 7l-4 -4l-4 4" }, { r: "shoot", x: 0, y: -1, a: 3, o: [12, 9] }],
    ["path", { d: "M3 12a9 9 0 0 0 18 0" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
