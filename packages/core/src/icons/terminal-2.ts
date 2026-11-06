import { icon } from "../icon.js";

// Adapted from Tabler Icons "terminal-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Terminal2 = icon("Terminal2", "terminal-2", {
  nodes: [
    ["path", { d: "M8 9l3 3l-3 3" }, { r: "slide", x: 1, a: 1.5, o: [9.5, 12] }],
    ["path", { d: "M13 15l3 0" }, { r: "flicker", d: 0.05, o: [14.5, 15] }],
    ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" }],
  ],
});
