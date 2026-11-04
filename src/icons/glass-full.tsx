import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "glass-full" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlassFull = createIcon("GlassFull", "glass-full", {
  nodes: [
    ["path", { d: "M8 21l8 0" }],
    ["path", { d: "M12 15l0 6" }],
    ["path", { d: "M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10" }],
    ["path", { d: "M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" }, { r: "sway", a: 5, o: [12, 10] }],
  ],
});
