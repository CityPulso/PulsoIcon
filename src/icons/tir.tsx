import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tir" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tir = createIcon("Tir", "tir", {
  nodes: [
    ["path", { d: "M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [5, 17] }],
    ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [17, 17] }],
    ["path", { d: "M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M12 18v-13h3" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M3 17l0 -5l9 0" }, { r: "slide", x: 1, a: 1 }],
  ],
});
