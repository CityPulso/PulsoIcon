import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "canary" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Canary = createIcon("Canary", "canary", {
  nodes: [
    ["path", { d: "M12 20v-2" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M15 8.01v.01" }, { r: "float" }],
    ["path", { d: "M3 17l8 -8v-1a4 4 0 1 1 8 0h2l-2 2v1a7 7 0 0 1 -13.215 3.223" }, { r: "float" }],
  ],
});
