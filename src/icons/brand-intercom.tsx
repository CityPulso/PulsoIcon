import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-intercom" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandIntercom = createIcon("BrandIntercom", "brand-intercom", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M7 8v3" }, { r: "grow", o: [7, 11] }],
    ["path", { d: "M10 7v6" }, { r: "grow", d: 0.05, o: [10, 13] }],
    ["path", { d: "M14 7v6" }, { r: "grow", d: 0.1, o: [14, 13] }],
    ["path", { d: "M17 8v3" }, { r: "grow", d: 0.15, o: [17, 11] }],
    ["path", { d: "M7 15c4 2.667 6 2.667 10 0" }, { r: "draw", d: 0.2 }],
  ],
});
