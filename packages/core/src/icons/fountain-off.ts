import { icon } from "../icon.js";

// Adapted from Tabler Icons "fountain-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FountainOff = icon("FountainOff", "fountain-off", {
  nodes: [
    ["path", { d: "M9 16v-5a2 2 0 1 0 -4 0" }, { r: "float", d: 0.1, o: [7, 12] }],
    ["path", { d: "M15 16v-1m0 -4a2 2 0 1 1 4 0" }, { r: "float", d: 0.2, o: [17, 12] }],
    ["path", { d: "M12 16v-4m0 -4v-2a3 3 0 0 1 6 0" }, { r: "float", d: 0.0, o: [15, 6] }],
    ["path", { d: "M7.451 3.43a3 3 0 0 1 4.549 2.57" }, { r: "float", d: 0.15, o: [9.5, 5] }],
    ["path", { d: "M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M9 16v-5a2 2 0 1 0 -4 0", fill: "none" }, { r: "float", d: 0.1, o: [7, 12] }],
    ["path", { d: "M15 16v-5a2 2 0 1 1 4 0", fill: "none" }, { r: "float", d: 0.2, o: [17, 12] }],
    ["path", { d: "M12 16v-10a3 3 0 0 1 6 0", fill: "none" }, { r: "float", d: 0, o: [15, 6] }],
    ["path", { d: "M6 6a3 3 0 0 1 6 0" }, { r: "float", d: 0.15, o: [9.5, 5] }],
    ["path", { d: "M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
