import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "comet" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Comet = createIcon("Comet", "comet", {
  nodes: [
    ["path", { d: "M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" }, { r: "twinkle", o: [15.5, 15] }],
    ["path", { d: "M4 4l7 7" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [7.5, 7.5] }],
    ["path", { d: "M9 4l3.5 3.5" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [10.75, 5.75] }],
    ["path", { d: "M4 9l3.5 3.5" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [5.75, 10.75] }],
  ],
});
