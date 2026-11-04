import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "switch-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Switch2 = createIcon("Switch2", "switch-2", {
  nodes: [
    ["path", { d: "M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" }, { r: "draw" }],
    ["path", { d: "M18 4l3 3l-3 3" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M3 7h5l7 10h6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M18 20l3 -3l-3 -3" }, { r: "slide", d: 0.4, x: 1, a: 1.5, o: [19.5, 17] }],
  ],
});
