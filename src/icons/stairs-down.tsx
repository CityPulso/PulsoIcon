import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stairs-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StairsDown = createIcon("StairsDown", "stairs-down", {
  nodes: [
    ["path", { d: "M22 21h-5v-5h-5v-5h-5v-5h-5" }],
    ["path", { d: "M18 3v7" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M15 7l3 3l3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
