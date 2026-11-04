import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stairs-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StairsUp = createIcon("StairsUp", "stairs-up", {
  nodes: [
    ["path", { d: "M22 6h-5v5h-5v5h-5v5h-5" }],
    ["path", { d: "M6 10v-7" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M3 6l3 -3l3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
