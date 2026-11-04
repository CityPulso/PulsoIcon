import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "code-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CodeCircle = createIcon("CodeCircle", "code-circle", {
  nodes: [
    ["path", { d: "M10 14l-2 -2l2 -2" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M14 10l2 2l-2 2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
  ],
});
