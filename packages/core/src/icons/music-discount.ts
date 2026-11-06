import { icon } from "../icon.js";

// Adapted from Tabler Icons "music-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicDiscount = icon("MusicDiscount", "music-discount", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v9" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.3, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.2, o: [16, 16] }],
  ],
});
