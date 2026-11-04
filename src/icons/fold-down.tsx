import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fold-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FoldDown = createIcon("FoldDown", "fold-down", {
  nodes: [
    ["path", { d: "M12 11v8l3 -3m-6 0l3 3" }, { r: "slide", x: 0, y: 1, a: 2 }],
    ["path", { d: "M9 7l1 0" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M14 7l1 0" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M19 7l1 0" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M4 7l1 0" }, { r: "fade", d: 0.05 }],
  ],
});
