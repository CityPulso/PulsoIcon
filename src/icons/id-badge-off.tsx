import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "id-badge-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IdBadgeOff = createIcon("IdBadgeOff", "id-badge-off", {
  nodes: [
    ["path", { d: "M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M11.179 11.176a2 2 0 1 0 2.635 2.667" }, { r: "pop", o: [12, 12.5] }],
    ["path", { d: "M10 6h4" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M9 18h6" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M5 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3l0 -12" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 12.5] }, "cut"],
    ["path", { d: "M10 6h4" }, { r: "swing", o: [12, 3] }, "line"],
    ["path", { d: "M9 18h6" }, { r: "swing", o: [12, 3] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
