import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-up-tail" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpTail = createIcon("ArrowUpTail", "arrow-up-tail", {
  nodes: [
    ["path", { d: "M12 18l0 -15" }, { r: "slide", y: -1, a: 1.5, o: [12, 11] }],
    ["path", { d: "M15 6l-3 -3l-3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 4.5] }],
    ["path", { d: "M15 21l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [12, 19.5] }],
  ],
});
