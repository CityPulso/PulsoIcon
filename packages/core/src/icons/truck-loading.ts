import { icon } from "../icon.js";

// Adapted from Tabler Icons "truck-loading" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TruckLoading = icon("TruckLoading", "truck-loading", {
  nodes: [
    ["path", { d: "M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" }],
    ["path", { d: "M9 9a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3l0 -2" }, { r: "drop", y: -1, a: 4 }],
    ["path", { d: "M7 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0.2, o: [9, 19] }],
    ["path", { d: "M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0.2, o: [18, 19] }],
  ],
});
