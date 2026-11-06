import { icon } from "../icon.js";

// Adapted from Tabler Icons "grid-goldenratio" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GridGoldenratio = icon("GridGoldenratio", "grid-goldenratio", {
  nodes: [
    ["path", { d: "M3 10h18" }, { r: "draw" }],
    ["path", { d: "M3 14h18" }, { r: "draw", d: 0.07 }],
    ["path", { d: "M10 3v18" }, { r: "draw", d: 0.14 }],
    ["path", { d: "M14 3v18" }, { r: "draw", d: 0.21 }],
  ],
});
