import { icon } from "../icon.js";

// Adapted from Tabler Icons "world-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeExclamation = icon("GlobeExclamation", "globe-exclamation", {
  nodes: [
    ["path", { d: "M20.986 12.51a9 9 0 1 0 -5.71 7.873" }],
    ["path", { d: "M3.6 9h16.8" }],
    ["path", { d: "M3.6 15h10.9" }],
    ["path", { d: "M11.5 3a17 17 0 0 0 0 18" }],
    ["path", { d: "M12.5 3a17 17 0 0 1 0 18" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
