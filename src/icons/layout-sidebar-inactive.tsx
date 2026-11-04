import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layout-sidebar-inactive" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutSidebarInactive = createIcon("LayoutSidebarInactive", "layout-sidebar-inactive", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" }],
    ["path", { d: "M9 4v1" }, { r: "pop", d: 0.0, o: [9, 4.5] }],
    ["path", { d: "M9 9v1" }, { r: "pop", d: 0.08, o: [9, 9.5] }],
    ["path", { d: "M9 14v1" }, { r: "pop", d: 0.16, o: [9, 14.5] }],
    ["path", { d: "M9 19v1" }, { r: "pop", d: 0.24, o: [9, 19.5] }],
  ],
});
