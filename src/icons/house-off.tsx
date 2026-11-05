import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseOff = createIcon("HouseOff", "house-off", {
  nodes: [
    ["path", { d: "M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" }],
    ["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" }, { r: "swing", a: 10, o: [9, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }, { r: "swing", a: 10, o: [9, 21] }, "cut"],
    ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
