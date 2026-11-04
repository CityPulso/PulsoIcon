import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-join" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsJoin = createIcon("ArrowsJoin", "arrows-join", {
  nodes: [
    ["path", { d: "M3 7h5l3.5 5h9.5" }, { r: "draw", o: [12, 9] }],
    ["path", { d: "M3 17h5l3.495 -5" }, { r: "draw", d: 0.05, o: [7, 14.5] }],
    ["path", { d: "M18 15l3 -3l-3 -3" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19.5, 12] }],
  ],
});
