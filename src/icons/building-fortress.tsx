import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-fortress" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingFortress = createIcon("BuildingFortress", "building-fortress", {
  nodes: [
    ["path", { d: "M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" }],
    ["path", { d: "M7 7v.01" }, { r: "flicker" }],
    ["path", { d: "M7 10v.01" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M7 13v.01" }, { r: "flicker", d: 0.2 }],
    ["path", { d: "M17 7v.01" }, { r: "flicker", d: 0.05 }],
    ["path", { d: "M17 10v.01" }, { r: "flicker", d: 0.15 }],
    ["path", { d: "M17 13v.01" }, { r: "flicker", d: 0.25 }],
  ],
});
