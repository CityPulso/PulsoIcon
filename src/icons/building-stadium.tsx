import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-stadium" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingStadium = createIcon("BuildingStadium", "building-stadium", {
  nodes: [
    ["path", { d: "M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" }],
    ["path", { d: "M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" }],
    ["path", { d: "M15 6h4v-3h-4v7" }, { r: "swing", d: 0.1, a: 10, o: [15, 10] }],
    ["path", { d: "M7 6h4v-3h-4v7" }, { r: "swing", a: 10, o: [7, 10] }],
  ],
});
