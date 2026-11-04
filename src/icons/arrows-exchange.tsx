import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-exchange" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsExchange = createIcon("ArrowsExchange", "arrows-exchange", {
  nodes: [
    ["path", { d: "M7 10h14l-4 -4" }, { r: "slide", x: 1, a: 1.5, o: [14, 8] }],
    ["path", { d: "M17 14h-14l4 4" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [10, 16] }],
  ],
});
