import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-toyota" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandToyota = createIcon("BrandToyota", "brand-toyota", {
  nodes: [
    ["path", { d: "M2 12a10 7 0 1 0 20 0a10 7 0 1 0 -20 0" }],
    ["path", { d: "M9 12c0 3.866 1.343 7 3 7s3 -3.134 3 -7s-1.343 -7 -3 -7s-3 3.134 -3 7" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M6.415 6.191c-.888 .503 -1.415 1.13 -1.415 1.809c0 1.657 3.134 3 7 3s7 -1.343 7 -3c0 -.678 -.525 -1.304 -1.41 -1.806" }, { r: "draw", d: 0.15 }],
  ],
});
