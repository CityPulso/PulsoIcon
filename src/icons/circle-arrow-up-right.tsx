import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-arrow-up-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleArrowUpRight = createIcon("CircleArrowUpRight", "circle-arrow-up-right", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M15 9l-6 6" }, { r: "slide", x: 0.7, y: -0.7, a: 2, o: [12, 12] }],
    ["path", { d: "M15 15v-6h-6" }, { r: "slide", x: 0.7, y: -0.7, a: 2, o: [12, 12] }],
  ],
});
