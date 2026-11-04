import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "typography" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Typography = createIcon("Typography", "typography", {
  nodes: [
    ["path", { d: "M4 20l3 0" }, { r: "growX", d: 0.4, o: [4, 20] }],
    ["path", { d: "M14 20l7 0" }, { r: "growX", d: 0.4, o: [14, 20] }],
    ["path", { d: "M6.9 15l6.9 0" }, { r: "growX", d: 0.3, o: [6.9, 15] }],
    ["path", { d: "M10.2 6.3l5.8 13.7" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 20l6 -16l2 0l7 16" }, { r: "draw" }],
  ],
});
