import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-ramp-right-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampRight2 = icon("ArrowRampRight2", "arrow-ramp-right-2", {
  nodes: [
    ["path", { d: "M6 3v8.707" }],
    ["path", { d: "M16 14l4 -4l-4 -4" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [18, 10] }],
    ["path", { d: "M6 21c0 -6.075 4.925 -11 11 -11h3" }, { r: "draw" }],
  ],
});
