import { icon } from "../icon.js";

// Adapted from Tabler Icons "shape-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShapeOff = icon("ShapeOff", "shape-off", {
  nodes: [
    ["path", { d: "M3.575 3.597a2 2 0 0 0 2.849 2.808" }],
    ["path", { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [19, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.08, o: [5, 19] }],
    ["path", { d: "M17.574 17.598a2 2 0 0 0 2.826 2.83" }],
    ["path", { d: "M5 7v10" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M9 5h8" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M7 19h10" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M19 7v8" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [19, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.08, o: [5, 19] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M5 7l0 10", fill: "none" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M7 5l10 0", fill: "none" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M7 19l10 0", fill: "none" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M19 7l0 10", fill: "none" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
