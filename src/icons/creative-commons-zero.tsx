import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "creative-commons-zero" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreativeCommonsZero = createIcon("CreativeCommonsZero", "creative-commons-zero", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 12a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" }, { r: "draw" }],
    ["path", { d: "M14 9l-4 6" }, { r: "draw", d: 0.25 }],
  ],
});
