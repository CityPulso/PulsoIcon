import { icon } from "../icon.js";

// Adapted from Tabler Icons "address-book" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AddressBook = icon("AddressBook", "address-book", {
  nodes: [
    ["path", { d: "M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }],
    ["path", { d: "M10 16h6" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [13, 11] }],
    ["path", { d: "M4 8h3" }, { r: "slide", d: 0.05, x: -1, a: 1 }],
    ["path", { d: "M4 12h3" }, { r: "slide", d: 0.1, x: -1, a: 1 }],
    ["path", { d: "M4 16h3" }, { r: "slide", d: 0.15, x: -1, a: 1 }],
  ],
});
