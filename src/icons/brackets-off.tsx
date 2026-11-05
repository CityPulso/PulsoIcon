import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brackets-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsOff = createIcon("BracketsOff", "brackets-off", {
  nodes: [
    ["path", { d: "M5 5v15h3" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M16 4h3v11m0 4v1h-3" }, { r: "slide", x: 1, a: 1, o: [18, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3", fill: "none" }, { r: "slide", x: 1, a: 1, o: [18, 12] }],
    ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3", fill: "none" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
