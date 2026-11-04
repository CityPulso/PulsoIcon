import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-down-to-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownToArc = createIcon("ArrowDownToArc", "arrow-down-to-arc", {
  nodes: [
    ["path", { d: "M12 3v12" }, { r: "bounce", x: 0, y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M16 11l-4 4l-4 -4" }, { r: "bounce", x: 0, y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M3 12a9 9 0 0 0 18 0" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
