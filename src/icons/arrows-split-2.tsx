import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-split-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsSplit2 = createIcon("ArrowsSplit2", "arrows-split-2", {
  nodes: [
    ["path", { d: "M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897" }, { r: "draw" }],
    ["path", { d: "M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M18 10l3 -3l-3 -3" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M18 20l3 -3l-3 -3" }, { r: "slide", d: 0.4, x: 1, a: 1.5, o: [19.5, 17] }],
  ],
});
