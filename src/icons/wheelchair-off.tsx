import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wheelchair-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WheelchairOff = createIcon("WheelchairOff", "wheelchair-off", {
  nodes: [
    ["path", { d: "M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "spin", d: 0, o: [8, 16] }],
    ["path", { d: "M17.582 17.59a2 2 0 0 0 2.833 2.824" }, { r: "spin", d: 0, o: [19, 19] }],
    ["path", { d: "M14 14h-1.4" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 6v5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 8h2m4 0h5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M15 8v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M6 8h9v6h-9z" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3h1a2 2 0 0 1 2 2v6", fill: "none" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 8h11", fill: "none" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M19 17a3 3 0 0 0 -3 -3h-3.4", fill: "none" }, { r: "spin", d: 0, o: [19, 19] }],
    ["circle", { cx: "8", cy: "16", r: "7" }, { r: "spin", d: 0, o: [8, 16] }, "cut"],
    ["path", { d: "M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "spin", d: 0, o: [8, 16] }],
    ["path", { d: "M8 13.5v5M5.5 16h5" }, { r: "spin", d: 0, o: [8, 16] }, "cut"],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [19, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
