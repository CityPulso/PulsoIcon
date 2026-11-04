import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chevrons-up-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChevronsUpLeft = createIcon("ChevronsUpLeft", "chevrons-up-left", {
  nodes: [
    ["path", { d: "M7 15v-8h8" }, { r: "slide", x: -0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M11 19v-8h8" }, { r: "slide", d: 0.1, x: -0.7, y: -0.7, a: 1.5, o: [12, 12] }],
  ],
});
