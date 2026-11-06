import { icon } from "../icon.js";

// Adapted from Tabler Icons "hierarchy-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HierarchyOff = icon("HierarchyOff", "hierarchy-off", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [5, 19] }],
    ["path", { d: "M17.585 17.587a2 2 0 0 0 2.813 2.843" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M6.5 17.5l5.5 -4.5l5.5 4.5" }, { r: "draw", d: 0.12, o: [12, 15] }],
    ["path", { d: "M12 7v1m0 4v1" }, { r: "draw", d: 0.08, o: [12, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [5, 19] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M6.5 17.5l5.5 -4.5l5.5 4.5", fill: "none" }, { r: "draw", d: 0.12, o: [12, 15] }],
    ["path", { d: "M12 7l0 6", fill: "none" }, { r: "draw", d: 0.08, o: [12, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
