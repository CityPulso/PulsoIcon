import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "barbell" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "barbell" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Barbell = createIcon("Barbell", "barbell", {
  nodes: [
    ["path", { d: "M2 12h1" }, { r: "float", a: 2 }],
    ["path", { d: "M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" }, { r: "float", a: 2 }],
    ["path", { d: "M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" }, { r: "float", a: 2 }],
    ["path", { d: "M9 12h6" }, { r: "float", a: 2 }],
    ["path", { d: "M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" }, { r: "float", a: 2 }],
    ["path", { d: "M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" }, { r: "float", a: 2 }],
    ["path", { d: "M22 12h-1" }, { r: "float", a: 2 }],
  ],
  solid: [
    ["path", { d: "M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1", stroke: "none" }, { r: "float", a: 2 }],
    ["path", { d: "M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1", stroke: "none" }, { r: "float", a: 2 }],
    ["path", { d: "M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2", stroke: "none" }, { r: "float", a: 2 }],
  ],
});
