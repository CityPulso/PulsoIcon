import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pointer-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PointerPlus = createIcon("PointerPlus", "pointer-plus", {
  nodes: [
    ["path", { d: "M15.941 13.385l-1.163 -1.163l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l1.23 1.23" }],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", o: [19, 19] }],
  ],
});
