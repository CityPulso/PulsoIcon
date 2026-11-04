import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-fork-triple" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowForkTriple = createIcon("ArrowForkTriple", "arrow-fork-triple", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M16 7l-4 -4l-4 4" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M16 11h5v5" }, { r: "slide", d: 0.25, x: 1, y: -1, a: 1.5, o: [18.5, 13.5] }],
    ["path", { d: "M8 11h-5v5" }, { r: "slide", d: 0.25, x: -1, y: -1, a: 1.5, o: [5.5, 13.5] }],
    ["path", { d: "M3 11l8.293 8.293c.453 .453 .707 1.067 .707 1.707" }, { r: "draw", d: 0.1, o: [7.5, 16] }],
    ["path", { d: "M21 11l-8.293 8.293a2.4 2.4 0 0 0 -.707 1.707" }, { r: "draw", d: 0.1, o: [16.5, 16] }],
  ],
});
