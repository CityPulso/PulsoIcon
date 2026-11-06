import { icon } from "../icon.js";

// Adapted from Tabler Icons "sign-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SignLeft = icon("SignLeft", "sign-left", {
  nodes: [
    ["path", { d: "M16 21h-4" }],
    ["path", { d: "M14 21v-10" }],
    ["path", { d: "M14 6v-3" }],
    ["path", { d: "M18 6h-10l-2 2.5l2 2.5h10l0 -5" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
  ],
});
