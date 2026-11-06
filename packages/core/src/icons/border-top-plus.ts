import { icon } from "../icon.js";

// Adapted from Tabler Icons "border-top-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BorderTopPlus = icon("BorderTopPlus", "border-top-plus", {
  nodes: [
    ["path", { d: "M4 4h16" }, { r: "draw" }],
    ["path", { d: "M4 8v.01" }],
    ["path", { d: "M20 8v.01" }],
    ["path", { d: "M4 12v.01" }],
    ["path", { d: "M20 12v.01" }],
    ["path", { d: "M4 16v.01" }],
    ["path", { d: "M15 12h-6" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M20 16v.01" }],
    ["path", { d: "M4 20v.01" }],
    ["path", { d: "M8 20v.01" }],
    ["path", { d: "M12 20v.01" }],
    ["path", { d: "M16 20v.01" }],
    ["path", { d: "M20 20v.01" }],
  ],
});
