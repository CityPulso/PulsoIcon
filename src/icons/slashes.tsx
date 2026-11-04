import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "slashes" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Slashes = createIcon("Slashes", "slashes", {
  nodes: [
    ["path", { d: "M14 5l-10 14" }, { r: "draw" }],
    ["path", { d: "M20 5l-10 14" }, { r: "draw", d: 0.15 }],
  ],
});
