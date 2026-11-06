import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-shuffle-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsShuffle2 = icon("ArrowsShuffle2", "arrows-shuffle-2", {
  nodes: [
    ["path", { d: "M18 4l3 3l-3 3" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M18 20l3 -3l-3 -3" }, { r: "slide", d: 0.4, x: 1, a: 1.5, o: [19.5, 17] }],
    ["path", { d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" }, { r: "draw" }],
    ["path", { d: "M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" }, { r: "draw", d: 0.05 }],
  ],
});
