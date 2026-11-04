import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "angle-tool" (MIT, Copyright (c) 2021 Luca Burgio).
export const AngleTool = createIcon("AngleTool", "angle-tool", {
  nodes: [
    ["path", { d: "M3 21L3 3L9 3V15L21 15V21H3Z" }],
    ["path", { d: "M13 19V21" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M9 19V21" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M3 7H5" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M3 11H5" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M3 15H5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17 19V21" }, { r: "draw", d: 0.3 }],
  ],
});
