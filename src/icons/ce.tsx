import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ce" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ce = createIcon("Ce", "ce", {
  nodes: [
    ["path", { d: "M9 6a6 6 0 1 0 0 12" }, { r: "draw" }],
    ["path", { d: "M21 6a6 6 0 1 0 0 12" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 12h6" }, { r: "growX", d: 0.35, o: [15, 12] }],
  ],
});
