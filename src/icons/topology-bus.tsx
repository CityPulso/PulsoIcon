import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "topology-bus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TopologyBus = createIcon("TopologyBus", "topology-bus", {
  nodes: [
    ["path", { d: "M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.0, o: [12.0, 10.0] }],
    ["path", { d: "M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.04, o: [4.0, 10.0] }],
    ["path", { d: "M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.08, o: [20.0, 10.0] }],
    ["path", { d: "M2 16h20" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M4 12v4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 12v4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M20 12v4" }, { r: "draw", d: 0.25 }],
  ],
});
