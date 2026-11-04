import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layout-navbar-inactive" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutNavbarInactive = createIcon("LayoutNavbarInactive", "layout-navbar-inactive", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" }],
    ["path", { d: "M4 9h1" }, { r: "pop", d: 0.0, o: [4.5, 9] }],
    ["path", { d: "M19 9h1" }, { r: "pop", d: 0.24, o: [19.5, 9] }],
    ["path", { d: "M9 9h1" }, { r: "pop", d: 0.08, o: [9.5, 9] }],
    ["path", { d: "M14 9h1" }, { r: "pop", d: 0.16, o: [14.5, 9] }],
  ],
});
