import { icon } from "../icon.js";

// Adapted from Tabler Icons "cap-rounded" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CapRounded = icon("CapRounded", "cap-rounded", {
  nodes: [
    ["path", { d: "M20 6h-9a6 6 0 1 0 0 12h9" }, { r: "draw" }],
    ["path", { d: "M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "pop", d: 0.3, o: [11, 12] }],
    ["path", { d: "M13 12h7" }, { r: "draw", d: 0.3 }],
  ],
});
