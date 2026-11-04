import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "viewport-short" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ViewportShort = createIcon("ViewportShort", "viewport-short", {
  nodes: [
    ["path", { d: "M12 3v7l3 -3" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M9 7l3 3" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M12 21v-7l3 3" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M9 17l3 -3" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1" }],
    ["path", { d: "M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1" }],
  ],
});
