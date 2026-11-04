import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "creative-commons-nc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreativeCommonsNc = createIcon("CreativeCommonsNc", "creative-commons-nc", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" }, { r: "draw" }],
    ["path", { d: "M12 7v2" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 15v2" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M6 6l3 3" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M15 15l3 3" }, { r: "draw", d: 0.4 }],
  ],
});
