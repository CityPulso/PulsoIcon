import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "topology-full" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TopologyFull = createIcon("TopologyFull", "topology-full", {
  nodes: [
    ["path", { d: "M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.0, o: [18.0, 18.0] }],
    ["path", { d: "M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.04, o: [6.0, 18.0] }],
    ["path", { d: "M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.08, o: [6.0, 6.0] }],
    ["path", { d: "M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.12, o: [18.0, 6.0] }],
    ["path", { d: "M6 8v8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M18 16v-8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M8 6h8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M16 18h-8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7.5 7.5l9 9" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7.5 16.5l9 -9" }, { r: "draw", d: 0.25 }],
  ],
});
