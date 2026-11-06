import { icon } from "../icon.js";

// Adapted from Tabler Icons "target-arrow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TargetArrow = icon("TargetArrow", "target-arrow", {
  nodes: [
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.35, o: [12, 12] }],
    ["path", { d: "M12 7a5 5 0 1 0 5 5" }],
    ["path", { d: "M13 3.055a9 9 0 1 0 7.941 7.945" }],
    ["path", { d: "M15 6v3h3l3 -3h-3v-3l-3 3" }, { r: "drop", x: 1, y: -1, a: 4 }],
    ["path", { d: "M15 9l-3 3" }, { r: "drop", x: 1, y: -1, a: 4 }],
  ],
});
