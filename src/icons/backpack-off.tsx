import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "backpack-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BackpackOff = createIcon("BackpackOff", "backpack-off", {
  nodes: [
    ["path", { d: "M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872a3 3 0 0 1 -2.871 2.128h-8a3 3 0 0 1 -3 -3v-6a5.99 5.99 0 0 1 2.285 -4.712" }, { r: "sway", a: 4, o: [12, 4] }],
    ["path", { d: "M10 6v-1a2 2 0 1 1 4 0v1" }, { r: "sway", a: 4, o: [12, 4] }],
    ["path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" }, { r: "sway", a: 4, o: [12, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }, { r: "sway", a: 4, o: [12, 4] }],
    ["path", { d: "M8 10h8" }, { r: "sway", a: 4, o: [12, 4] }, "line"],
    ["path", { d: "M8 18h8" }, { r: "sway", a: 4, o: [12, 4] }, "line"],
    ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }, { r: "sway", a: 4, o: [12, 4] }, "cut"],
    ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", fill: "none" }, { r: "sway", a: 4, o: [12, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
