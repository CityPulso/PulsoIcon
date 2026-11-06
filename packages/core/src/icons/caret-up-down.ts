import { icon } from "../icon.js";

// Adapted from Tabler Icons "caret-up-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CaretUpDown = icon("CaretUpDown", "caret-up-down", {
  nodes: [
    ["path", { d: "M18 10l-6 -6l-6 6h12" }, { r: "bounce", y: -1, o: [12, 7] }],
    ["path", { d: "M18 14l-6 6l-6 -6h12" }, { r: "bounce", d: 0.1, y: 1, o: [12, 17] }],
  ],
});
