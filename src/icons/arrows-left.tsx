import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsLeft = createIcon("ArrowsLeft", "arrows-left", {
  nodes: [
    ["path", { d: "M3 7l18 0" }, { r: "slide", x: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M6 20l-3 -3l3 -3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [4.5, 17] }],
    ["path", { d: "M6 4l-3 3l3 3" }, { r: "slide", x: -1, a: 1.5, o: [4.5, 7] }],
    ["path", { d: "M3 17l18 0" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 17] }],
  ],
});
