import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transfer" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Transfer = createIcon("Transfer", "transfer", {
  nodes: [
    ["path", { d: "M20 10h-16l5.5 -6" }, { r: "slide", x: -1, y: 0, a: 2, o: [12, 7] }],
    ["path", { d: "M4 14h16l-5.5 6" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2, o: [12, 17] }],
  ],
});
