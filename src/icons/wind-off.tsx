import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wind-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WindOff = createIcon("WindOff", "wind-off", {
  nodes: [
    ["path", { d: "M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24" }, { r: "slide", d: 0, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 12h9" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
