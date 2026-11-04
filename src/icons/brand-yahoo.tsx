import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-yahoo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandYahoo = createIcon("BrandYahoo", "brand-yahoo", {
  nodes: [
    ["path", { d: "M3 6l5 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 18l7 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4.5 6l5.5 7v5" }, { r: "draw" }],
    ["path", { d: "M10 13l6 -5" }, { r: "draw" }],
    ["path", { d: "M12.5 8l5 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20 11l0 4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20 18l0 .01" }, { r: "pop", d: 0.35, o: [20, 18] }],
  ],
});
