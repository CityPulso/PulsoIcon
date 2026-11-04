import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hours-12" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hours12 = createIcon("Hours12", "hours-12", {
  nodes: [
    ["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M4 13c.468 3.6 3.384 6.546 7 7" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 21v-6" }, { r: "draw", d: 0.25 }],
  ],
});
