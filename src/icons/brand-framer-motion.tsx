import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-framer-motion" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandFramerMotion = createIcon("BrandFramerMotion", "brand-framer-motion", {
  nodes: [
    ["path", { d: "M12 12l-8 -8v16l16 -16v16l-4 -4" }, { r: "draw" }],
    ["path", { d: "M20 12l-8 8l-4 -4" }, { r: "slide", d: 0.2, x: 1, y: 1, a: 1.2 }],
  ],
});
