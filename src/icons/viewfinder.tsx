import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "viewfinder" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Viewfinder = createIcon("Viewfinder", "viewfinder", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M12 3l0 4" }, { r: "slide", x: 0, y: 1, a: 1 }],
    ["path", { d: "M12 21l0 -3" }, { r: "slide", x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 12l4 0" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M21 12l-3 0" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M12 12l0 .01" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
