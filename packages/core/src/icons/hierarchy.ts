import { icon } from "../icon.js";

// Adapted from Tabler Icons "hierarchy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hierarchy = icon("Hierarchy", "hierarchy", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [19, 19] }],
    ["path", { d: "M6.5 17.5l5.5 -4.5l5.5 4.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 7l0 6" }, { r: "draw", d: 0.1 }],
  ],
});
