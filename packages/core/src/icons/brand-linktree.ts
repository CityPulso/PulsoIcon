import { icon } from "../icon.js";

// Adapted from Tabler Icons "brand-linktree" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandLinktree = icon("BrandLinktree", "brand-linktree", {
  nodes: [
    ["path", { d: "M4 10h16" }, { r: "growX", d: 0.1, o: [12, 10] }],
    ["path", { d: "M6.5 4.5l11 11" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M6.5 15.5l11 -11" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 10v-8" }, { r: "grow", o: [12, 10] }],
    ["path", { d: "M12 15v7" }, { r: "grow", d: 0.25, o: [12, 15] }],
  ],
});
