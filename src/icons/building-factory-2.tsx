import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-factory-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingFactory2 = createIcon("BuildingFactory2", "building-factory-2", {
  nodes: [
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M5 21v-12l5 4v-4l5 4h4" }],
    ["path", { d: "M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" }, { r: "draw" }],
    ["path", { d: "M9 17h1" }, { r: "flicker", d: 0.2, o: [9.5, 17] }],
    ["path", { d: "M14 17h1" }, { r: "flicker", d: 0.35, o: [14.5, 17] }],
  ],
});
