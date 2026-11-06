import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-bar-to-up-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBarToUpDashed = icon("ArrowBarToUpDashed", "arrow-bar-to-up-dashed", {
  nodes: [
    ["path", { d: "M12 10v10" }, { r: "bounce", x: 0, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M12 10l4 4" }, { r: "bounce", x: 0, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M12 10l-4 4" }, { r: "bounce", x: 0, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M4 4h3m13 0h-3m-3.5 0h-3" }, { r: "fade", d: 0.15, o: [12, 4] }],
  ],
});
