import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brackets-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsOff = createIcon("BracketsOff", "brackets-off", {
  nodes: [
    ["path", { d: "M5 5v15h3" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M16 4h3v11m0 4v1h-3" }, { r: "slide", x: 1, a: 1, o: [18, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
