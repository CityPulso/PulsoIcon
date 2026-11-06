import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-down-tail" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownTail = icon("ArrowDownTail", "arrow-down-tail", {
  nodes: [
    ["path", { d: "M12 6v15" }, { r: "slide", y: 1, a: 1.5, o: [12, 13] }],
    ["path", { d: "M9 18l3 3l3 -3" }, { r: "slide", y: 1, a: 1.5, o: [12, 19.5] }],
    ["path", { d: "M9 3l3 3l3 -3" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [12, 4.5] }],
  ],
});
