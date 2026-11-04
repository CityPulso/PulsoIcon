import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-3k" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Badge3k = createIcon("Badge3k", "badge-3k", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 9v6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M17 9l-2 3l2 3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M15 12h-1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" }, { r: "draw", d: 0.1 }],
  ],
});
