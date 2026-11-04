import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "world-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeUp = createIcon("GlobeUp", "globe-up", {
  nodes: [
    ["path", { d: "M20.985 12.52a9 9 0 1 0 -8.451 8.463" }],
    ["path", { d: "M3.6 9h16.8" }],
    ["path", { d: "M3.6 15h10.9" }],
    ["path", { d: "M11.5 3a17 17 0 0 0 0 18" }],
    ["path", { d: "M12.5 3a16.996 16.996 0 0 1 2.391 11.512" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
