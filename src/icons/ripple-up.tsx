import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ripple-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RippleUp = createIcon("RippleUp", "ripple-up", {
  nodes: [
    ["path", { d: "M3 7q 4.5 -3 9 0t 9 0" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 17q 4.5 -3 9 0q .218 .144 .434 .275" }, { r: "slide", d: 0.2, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 12q 4.5 -3 9 0q 1.941 1.294 3.882 1.472" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
