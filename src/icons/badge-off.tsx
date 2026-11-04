import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgeOff = createIcon("BadgeOff", "badge-off", {
  nodes: [
    ["path", { d: "M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" }, { r: "float", o: [12, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
