import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-move-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsMoveVertical = icon("ArrowsMoveVertical", "arrows-move-vertical", {
  nodes: [
    ["path", { d: "M9 18l3 3l3 -3" }, { r: "slide", y: 1, a: 1.5, o: [12, 19.5] }],
    ["path", { d: "M12 15v6" }, { r: "slide", y: 1, a: 1.5, o: [12, 18] }],
    ["path", { d: "M15 6l-3 -3l-3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 4.5] }],
    ["path", { d: "M12 3v6" }, { r: "slide", y: -1, a: 1.5, o: [12, 6] }],
  ],
});
