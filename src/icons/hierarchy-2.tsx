import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hierarchy-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hierarchy2 = createIcon("Hierarchy2", "hierarchy-2", {
  nodes: [
    ["path", { d: "M10 3h4v4h-4l0 -4" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M3 17h4v4h-4l0 -4" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "M17 17h4v4h-4l0 -4" }, { r: "pop", d: 0.3, o: [19, 19] }],
    ["path", { d: "M7 17l5 -4l5 4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 7l0 6" }, { r: "draw", d: 0.1 }],
  ],
});
