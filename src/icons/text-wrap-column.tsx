import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-wrap-column" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextWrapColumn = createIcon("TextWrapColumn", "text-wrap-column", {
  nodes: [
    ["path", { d: "M7 9h7a3 3 0 0 1 0 6h-4l2 -2" }, { r: "draw" }],
    ["path", { d: "M12 17l-2 -2" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M3 3v18" }],
    ["path", { d: "M21 3v18" }],
  ],
});
