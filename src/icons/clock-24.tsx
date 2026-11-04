import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-24" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Clock24 = createIcon("Clock24", "clock-24", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0" }],
    ["path", { d: "M12 7v5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M18 15v2a1 1 0 0 0 1 1h1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
