import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "border-bottom-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BorderBottomPlus = createIcon("BorderBottomPlus", "border-bottom-plus", {
  nodes: [
    ["path", { d: "M4 20h16" }, { r: "draw" }],
    ["path", { d: "M4 16v-.01" }],
    ["path", { d: "M20 16v-.01" }],
    ["path", { d: "M4 12v-.01" }],
    ["path", { d: "M20 12v-.01" }],
    ["path", { d: "M4 8v-.01" }],
    ["path", { d: "M20 8v-.01" }],
    ["path", { d: "M4 4v-.01" }],
    ["path", { d: "M8 4v-.01" }],
    ["path", { d: "M12 4v-.01" }],
    ["path", { d: "M16 4v-.01" }],
    ["path", { d: "M20 4v-.01" }],
    ["path", { d: "M15 12h-6" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
