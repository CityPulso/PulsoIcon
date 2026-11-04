import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-rectangle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleRectangle = createIcon("CircleRectangle", "circle-rectangle", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 10h10v4h-10l0 -4" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
