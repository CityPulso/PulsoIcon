import { icon } from "../icon.js";

// Adapted from Tabler Icons "bell-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellCancel = icon("BellCancel", "bell-cancel", {
  nodes: [
    ["path", { d: "M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 3 3" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
