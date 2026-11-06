import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-left-tail" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLeftTail = icon("ArrowLeftTail", "arrow-left-tail", {
  nodes: [
    ["path", { d: "M18 12h-15" }, { r: "slide", x: -1, a: 1.5, o: [11, 12] }],
    ["path", { d: "M6 9l-3 3l3 3" }, { r: "slide", x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M21 9l-3 3l3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [19.5, 12] }],
  ],
});
