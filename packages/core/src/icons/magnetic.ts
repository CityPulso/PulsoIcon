import { icon } from "../icon.js";

// Adapted from Tabler Icons "magnetic" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Magnetic = icon("Magnetic", "magnetic", {
  nodes: [
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1" }, { r: "sway", a: 4, o: [12, 12] }],
    ["path", { d: "M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1" }, { r: "sway", a: -4, o: [12, 12] }],
    ["path", { d: "M3 13l2 -2l2 2" }, { r: "bounce", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M17 13l2 -2l2 2" }, { r: "bounce", d: 0.1, y: -1, a: 1.5 }],
  ],
});
