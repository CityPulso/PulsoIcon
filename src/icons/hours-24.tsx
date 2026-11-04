import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hours-24" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hours24 = createIcon("Hours24", "hours-24", {
  nodes: [
    ["path", { d: "M4 13c.325 2.532 1.881 4.781 4 6" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M4 5v4h4" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M18 15v2a1 1 0 0 0 1 1h1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
