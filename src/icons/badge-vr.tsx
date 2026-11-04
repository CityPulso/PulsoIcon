import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-vr" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgeVr = createIcon("BadgeVr", "badge-vr", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7 9l2 6l2 -6" }, { r: "draw", d: 0.1 }],
  ],
});
