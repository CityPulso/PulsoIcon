import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "creative-commons-by" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreativeCommonsBy = createIcon("CreativeCommonsBy", "creative-commons-by", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M11 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M9 13v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-.5l-.5 4h-2l-.5 -4h-.5a1 1 0 0 1 -1 -1" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [12, 14] }],
  ],
});
