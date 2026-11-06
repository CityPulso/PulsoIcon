import { icon } from "../icon.js";

// Adapted from Tabler Icons "s-turn-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const STurnUp = icon("STurnUp", "s-turn-up", {
  nodes: [
    ["path", { d: "M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", o: [5, 19] }],
    ["path", { d: "M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 6l3 -3l3 3" }, { r: "slide", d: 0.5, x: 0, y: -1, a: 2 }],
  ],
});
