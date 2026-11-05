import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-4k" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Badge4k = createIcon("Badge4k", "badge-4k", {
  text: true,
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 9v2a1 1 0 0 0 1 1h1" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 9v6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 9v6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M17 9l-2 3l2 3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M15 12h-1" }, { r: "draw", d: 0.25 }],
  ],
});
