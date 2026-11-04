import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "bed-ready" (MIT, Copyright (c) 2021 Luca Burgio).
export const BedReady = createIcon("BedReady", "bed-ready", {
  nodes: [
    ["path", { d: "M21 16V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H14" }],
    ["path", { d: "M3 8L11 8L11 6" }],
    ["path", { d: "M21 8L13 8L13 6" }],
    ["path", { d: "M16 20L18 22L22 18" }, { r: "draw" }],
  ],
});
