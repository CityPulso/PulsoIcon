import { icon } from "../icon.js";

// Adapted from Tabler Icons "pennant" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pennant = icon("Pennant", "pennant", {
  nodes: [
    ["path", { d: "M8 21l4 0" }],
    ["path", { d: "M10 21l0 -18" }],
    ["path", { d: "M10 4l9 4l-9 4" }, { r: "sway", a: 8, o: [10, 8] }],
  ],
});
