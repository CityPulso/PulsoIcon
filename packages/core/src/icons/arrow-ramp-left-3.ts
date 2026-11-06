import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-ramp-left-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampLeft3 = icon("ArrowRampLeft3", "arrow-ramp-left-3", {
  nodes: [
    ["path", { d: "M18 3v6" }],
    ["path", { d: "M8 16l-4 -4l4 -4" }, { r: "slide", d: 0.35, x: -1, a: 1.5, o: [6, 12] }],
    ["path", { d: "M18 21v-6a3 3 0 0 0 -3 -3h-11" }, { r: "draw" }],
  ],
});
