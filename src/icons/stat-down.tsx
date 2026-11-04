import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "stat-down" (MIT, Copyright (c) 2021 Luca Burgio).
export const StatDown = createIcon("StatDown", "stat-down", {
  nodes: [
    ["path", { d: "M4 10L12 18L15 15L20 20" }, { r: "draw" }],
    ["path", { d: "M16 4V12M16 12L19 9M16 12L13 9" }, { r: "slide", d: 0.2, x: 0, y: 1 }],
  ],
});
