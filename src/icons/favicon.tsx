import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "favicon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Favicon = createIcon("Favicon", "favicon", {
  nodes: [
    ["path", { d: "M2 8a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3l0 -8" }],
    ["path", { d: "M6 10v4" }, { r: "draw" }],
    ["path", { d: "M11 10a2 2 0 1 0 0 4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.24 }],
  ],
});
