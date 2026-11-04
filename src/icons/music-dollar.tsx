import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicDollar = createIcon("MusicDollar", "music-dollar", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M9 17v-13h10v6" }],
    ["path", { d: "M9 8h10" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", o: [19, 18] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "draw", d: 0.2, o: [19, 18] }],
  ],
});
