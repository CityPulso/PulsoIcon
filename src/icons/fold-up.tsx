import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fold-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FoldUp = createIcon("FoldUp", "fold-up", {
  nodes: [
    ["path", { d: "M12 13v-8l-3 3m6 0l-3 -3" }, { r: "slide", x: 0, y: -1, a: 2 }],
    ["path", { d: "M9 17l1 0" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M14 17l1 0" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M19 17l1 0" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M4 17l1 0" }, { r: "fade", d: 0.05 }],
  ],
});
