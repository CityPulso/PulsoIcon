import { icon } from "../icon.js";

// Adapted from Tabler Icons "cap-straight" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CapStraight = icon("CapStraight", "cap-straight", {
  nodes: [
    ["path", { d: "M8 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "pop", d: 0.3, o: [6, 12] }],
    ["path", { d: "M8 12h12" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M20 6h-12a2 2 0 0 0 -2 2v2" }, { r: "draw" }],
    ["path", { d: "M6 14v2a2 2 0 0 0 2 2h12" }, { r: "draw" }],
  ],
});
