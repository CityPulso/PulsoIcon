import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "artboard" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Artboard = createIcon("Artboard", "artboard", {
  nodes: [
    ["path", { d: "M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M3 8l1 0" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1 }],
    ["path", { d: "M3 16l1 0" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1 }],
    ["path", { d: "M8 3l0 1" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1 }],
    ["path", { d: "M16 3l0 1" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1 }],
    ["path", { d: "M20 8l1 0" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M20 16l1 0" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M8 20l0 1" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1 }],
    ["path", { d: "M16 20l0 1" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1 }],
  ],
});
