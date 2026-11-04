import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-superhuman" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandSuperhuman = createIcon("BrandSuperhuman", "brand-superhuman", {
  nodes: [
    ["path", { d: "M16 12l4 3l-8 7l-8 -7l4 -3" }],
    ["path", { d: "M12 3l-8 6l8 6l8 -6l-8 -6" }, { r: "bounce", y: -1, a: 1.5 }],
    ["path", { d: "M12 15h8" }, { r: "draw", d: 0.15 }],
  ],
});
