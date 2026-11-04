import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-arrow-up-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleArrowUpLeft = createIcon("CircleArrowUpLeft", "circle-arrow-up-left", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M9 9l6 6" }, { r: "slide", x: -0.7, y: -0.7, a: 2, o: [12, 12] }],
    ["path", { d: "M15 9h-6v6" }, { r: "slide", x: -0.7, y: -0.7, a: 2, o: [12, 12] }],
  ],
});
