import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-nytimes" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandNytimes = createIcon("BrandNytimes", "brand-nytimes", {
  nodes: [
    ["path", { d: "M11.036 5.058a8 8 0 1 0 8.706 9.965" }, { r: "draw" }],
    ["path", { d: "M12 21v-11l-7.5 4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M9 12v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 13h-.01" }, { r: "pop", d: 0.35, o: [16, 13] }],
  ],
});
