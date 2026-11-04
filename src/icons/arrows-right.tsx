import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsRight = createIcon("ArrowsRight", "arrows-right", {
  nodes: [
    ["path", { d: "M21 17l-18 0" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M18 4l3 3l-3 3" }, { r: "slide", x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M18 20l3 -3l-3 -3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [19.5, 17] }],
    ["path", { d: "M21 7l-18 0" }, { r: "slide", x: 1, a: 1.5, o: [12, 7] }],
  ],
});
