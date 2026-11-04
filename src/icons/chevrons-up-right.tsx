import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chevrons-up-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChevronsUpRight = createIcon("ChevronsUpRight", "chevrons-up-right", {
  nodes: [
    ["path", { d: "M9 7h8v8" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M5 11h8v8" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
  ],
});
