import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "world-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeSearch = createIcon("GlobeSearch", "globe-search", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -9 9" }],
    ["path", { d: "M3.6 9h16.8" }],
    ["path", { d: "M3.6 15h7.9" }],
    ["path", { d: "M11.5 3a17 17 0 0 0 0 18" }],
    ["path", { d: "M12.5 3a16.984 16.984 0 0 1 2.574 8.62" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, o: [18, 18] }],
  ],
});
