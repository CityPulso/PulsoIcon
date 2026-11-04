import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingPlus = createIcon("BuildingPlus", "building-plus", {
  nodes: [
    ["path", { d: "M3 21h9" }],
    ["path", { d: "M9 8h1" }],
    ["path", { d: "M9 12h1" }],
    ["path", { d: "M9 16h1" }],
    ["path", { d: "M14 8h1" }],
    ["path", { d: "M14 12h1" }],
    ["path", { d: "M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 90, o: [19, 19] }],
  ],
});
