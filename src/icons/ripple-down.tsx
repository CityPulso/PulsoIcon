import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ripple-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RippleDown = createIcon("RippleDown", "ripple-down", {
  nodes: [
    ["path", { d: "M3 7q 4.5 -3 9 0t 9 0" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 17q 4.5 -3 9 0q .213 .142 .427 .27" }, { r: "slide", d: 0.2, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 12q 4.5 -3 9 0q 2.006 1.338 4.012 1.482" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
