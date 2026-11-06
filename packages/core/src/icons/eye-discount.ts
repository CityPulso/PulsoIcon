import { icon } from "../icon.js";

// Adapted from Tabler Icons "eye-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyeDiscount = icon("EyeDiscount", "eye-discount", {
  nodes: [
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.25, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.3, o: [16, 16] }],
  ],
});
