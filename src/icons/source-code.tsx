import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "source-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SourceCode = createIcon("SourceCode", "source-code", {
  nodes: [
    ["path", { d: "M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" }, { r: "draw", d: 0 }],
    ["path", { d: "M6 5l-2 2l2 2" }, { r: "slide", d: 0.05, x: -1, y: 0, a: 1, o: [5, 7] }],
    ["path", { d: "M10 9l2 -2l-2 -2" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 1, o: [11, 7] }],
  ],
});
