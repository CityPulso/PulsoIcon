import { icon } from "../icon.js";

// Adapted from Tabler Icons "menu-order" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MenuOrder = icon("MenuOrder", "menu-order", {
  nodes: [
    ["path", { d: "M4 10h16" }],
    ["path", { d: "M4 14h16" }],
    ["path", { d: "M9 18l3 3l3 -3" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M9 6l3 -3l3 3" }, { r: "slide", y: -1, a: 1.5 }],
  ],
});
