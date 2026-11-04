import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pipeline" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pipeline = createIcon("Pipeline", "pipeline", {
  nodes: [
    ["path", { d: "M3 4h8" }, { r: "slide", d: 0, x: 0, y: -1, a: 1, o: [7, 4] }],
    ["path", { d: "M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13 20h8" }, { r: "slide", d: 0.3, x: 0, y: 1, a: 1, o: [17, 20] }],
    ["path", { d: "M12 9v6" }, { r: "draw", d: 0.3 }],
  ],
});
