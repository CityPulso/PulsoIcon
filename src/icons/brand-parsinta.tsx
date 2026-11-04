import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-parsinta" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandParsinta = createIcon("BrandParsinta", "brand-parsinta", {
  nodes: [
    ["path", { d: "M12 3a9 9 0 1 0 9 9" }],
    ["path", { d: "M21 12a9 9 0 0 0 -9 -9" }, { r: "draw" }],
    ["path", { d: "M10 9v6l5 -3l-5 -3" }, { r: "press", d: 0.2, o: [11.7, 12] }],
  ],
});
