import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-ramp-right-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampRight3 = createIcon("ArrowRampRight3", "arrow-ramp-right-3", {
  nodes: [
    ["path", { d: "M6 3v6" }],
    ["path", { d: "M16 16l4 -4l-4 -4" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [18, 12] }],
    ["path", { d: "M6 21v-6a3 3 0 0 1 3 -3h11" }, { r: "draw" }],
  ],
});
