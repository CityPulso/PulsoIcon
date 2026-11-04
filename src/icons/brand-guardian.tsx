import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-guardian" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandGuardian = createIcon("BrandGuardian", "brand-guardian", {
  nodes: [
    ["path", { d: "M14 13h6" }, { r: "growX", d: 0.25, o: [14, 13] }],
    ["path", { d: "M4 12c0 -9.296 9.5 -9 9.5 -9c-2.808 0 -4.5 4.373 -4.5 9s1.763 8.976 4.572 8.976c0 .023 -9.572 1.092 -9.572 -8.976" }, { r: "draw" }],
    ["path", { d: "M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 13v8s2.77 -.37 4 -2v-6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M13.5 21h1.5" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M13.5 3h1" }, { r: "draw", d: 0.15 }],
  ],
});
