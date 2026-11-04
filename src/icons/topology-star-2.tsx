import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "topology-star-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TopologyStar2 = createIcon("TopologyStar2", "topology-star-2", {
  nodes: [
    ["path", { d: "M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.12, o: [12.0, 20.0] }],
    ["path", { d: "M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.04, o: [12.0, 4.0] }],
    ["path", { d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.16, o: [4.0, 12.0] }],
    ["path", { d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.08, o: [20.0, 12.0] }],
    ["path", { d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.0, o: [12.0, 12.0] }],
    ["path", { d: "M6 12h4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M14 12h4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 6v4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 14v4" }, { r: "draw", d: 0.25 }],
  ],
});
