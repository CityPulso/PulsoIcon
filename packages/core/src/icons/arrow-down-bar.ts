import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-down-bar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownBar = icon("ArrowDownBar", "arrow-down-bar", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 18l3 3l3 -3" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 19.5] }],
    ["path", { d: "M9 3h6" }, { r: "press", a: 0.2, o: [12, 3] }],
  ],
});
