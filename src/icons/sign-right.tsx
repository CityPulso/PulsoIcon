import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sign-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SignRight = createIcon("SignRight", "sign-right", {
  nodes: [
    ["path", { d: "M8 21h4" }],
    ["path", { d: "M10 21v-10" }],
    ["path", { d: "M10 6v-3" }],
    ["path", { d: "M6 6h10l2 2.5l-2 2.5h-10l0 -5" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
  ],
});
