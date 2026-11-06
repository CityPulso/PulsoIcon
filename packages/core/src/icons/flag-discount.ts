import { icon } from "../icon.js";

// Adapted from Tabler Icons "flag-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagDiscount = icon("FlagDiscount", "flag-discount", {
  nodes: [
    ["path", { d: "M12.804 14.641a5.02 5.02 0 0 1 -.804 -.641a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8" }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.35, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.25, o: [16, 16] }],
  ],
});
