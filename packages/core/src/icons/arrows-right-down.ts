import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-right-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsRightDown = icon("ArrowsRightDown", "arrows-right-down", {
  nodes: [
    ["path", { d: "M3 17l4 4l4 -4" }, { r: "slide", d: 0.2, y: 1, a: 1.5, o: [7, 19] }],
    ["path", { d: "M7 21v-11a3 3 0 0 1 3 -3h11" }, { r: "drawOut", o: [12, 12] }],
    ["path", { d: "M17 11l4 -4l-4 -4" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19, 7] }],
  ],
});
