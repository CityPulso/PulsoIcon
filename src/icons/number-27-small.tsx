import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-27-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number27Small = createIcon("Number27Small", "number-27-small", {
  text: true,
  nodes: [
    ["path", { d: "M14 8h4l-2 8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, { r: "draw" }],
  ],
});
