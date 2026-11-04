import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "viewport-tall" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ViewportTall = createIcon("ViewportTall", "viewport-tall", {
  nodes: [
    ["path", { d: "M12 10v-7l3 3" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [12, 6] }],
    ["path", { d: "M9 6l3 -3" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [12, 6] }],
    ["path", { d: "M12 14v7l3 -3" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 18] }],
    ["path", { d: "M9 18l3 3" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [12, 18] }],
    ["path", { d: "M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1" }],
    ["path", { d: "M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1" }],
  ],
});
