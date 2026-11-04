import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bubble-tea" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BubbleTea = createIcon("BubbleTea", "bubble-tea", {
  nodes: [
    ["path", { d: "M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" }],
    ["path", { d: "M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" }],
    ["path", { d: "M5 9h14" }],
    ["path", { d: "M12 9l4 -7" }, { r: "tilt", a: 10, o: [12, 9] }],
    ["path", { d: "M10.01 14h.01" }, { r: "float", a: 1.5 }],
    ["path", { d: "M11.02 18h.01" }, { r: "float", d: 0.1, a: 1.5 }],
    ["path", { d: "M13.02 16h.01" }, { r: "float", d: 0.2, a: 1.5 }],
  ],
});
