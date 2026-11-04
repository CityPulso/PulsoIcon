import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-sublime-text" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandSublimeText = createIcon("BrandSublimeText", "brand-sublime-text", {
  nodes: [
    ["path", { d: "M19 8l-14 4.5v-5.5l14 -4.5l0 5.5" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M19 17l-14 4.5v-5.5l14 -4.5l0 5.5" }, { r: "slide", d: 0.1, x: 1, a: 1.5 }],
    ["path", { d: "M19 11.5l-14 -4.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 12.5l14 4.5" }, { r: "draw", d: 0.2 }],
  ],
});
