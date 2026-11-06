import { icon } from "../icon.js";

// Adapted from Tabler Icons "tank" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tank = icon("Tank", "tank", {
  nodes: [
    ["path", { d: "M2 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M6 12l1 -5h5l3 5" }, { r: "turn", a: -8, o: [10, 12] }],
    ["path", { d: "M21 9l-7.8 0" }, { r: "turn", a: -8, o: [10, 12] }],
  ],
});
