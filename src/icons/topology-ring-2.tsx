import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "topology-ring-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TopologyRing2 = createIcon("TopologyRing2", "topology-ring-2", {
  nodes: [
    ["path", { d: "M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.0, o: [12.0, 6.0] }],
    ["path", { d: "M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.04, o: [5.0, 18.0] }],
    ["path", { d: "M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.08, o: [19.0, 18.0] }],
    ["path", { d: "M7 18h10" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M18 16l-5 -8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M11 8l-5 8" }, { r: "draw", d: 0.25 }],
  ],
});
