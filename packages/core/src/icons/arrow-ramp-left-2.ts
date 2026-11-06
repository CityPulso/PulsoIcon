import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-ramp-left-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampLeft2 = icon("ArrowRampLeft2", "arrow-ramp-left-2", {
  nodes: [
    ["path", { d: "M18 3v8.707" }],
    ["path", { d: "M8 14l-4 -4l4 -4" }, { r: "slide", d: 0.35, x: -1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M18 21c0 -6.075 -4.925 -11 -11 -11h-3" }, { r: "draw" }],
  ],
});
