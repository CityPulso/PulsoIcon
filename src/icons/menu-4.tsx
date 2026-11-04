import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "menu-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Menu4 = createIcon("Menu4", "menu-4", {
  nodes: [
    ["path", { d: "M7 6h10" }, { r: "growX", o: [12, 6] }],
    ["path", { d: "M4 12h16" }, { r: "growX", d: 0.08, o: [12, 12] }],
    ["path", { d: "M7 12h13" }, { r: "growX", d: 0.08, o: [12, 12] }],
    ["path", { d: "M7 18h10" }, { r: "growX", d: 0.16, o: [12, 18] }],
  ],
});
