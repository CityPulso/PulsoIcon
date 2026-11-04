import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "zip" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Zip = createIcon("Zip", "zip", {
  nodes: [
    ["path", { d: "M16 16v-8h2a2 2 0 1 1 0 4h-2" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M4 8h4l-4 8h4" }, { r: "draw" }],
  ],
});
