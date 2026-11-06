import { icon } from "../icon.js";

// Adapted from Iconoir "minus-square-dashed" (MIT, Copyright (c) 2021 Luca Burgio).
export const MinusSquareDashed = icon("MinusSquareDashed", "minus-square-dashed", {
  nodes: [
    ["path", { d: "M7 4H4V7" }, { r: "fade" }],
    ["path", { d: "M8 12H12H16" }, { r: "draw" }],
    ["path", { d: "M4 11V13" }, { r: "fade", d: 0.28 }],
    ["path", { d: "M11 4H13" }, { r: "fade", d: 0.04 }],
    ["path", { d: "M11 20H13" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M20 11V13" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M17 4H20V7" }, { r: "fade", d: 0.08 }],
    ["path", { d: "M7 20H4V17" }, { r: "fade", d: 0.24 }],
    ["path", { d: "M17 20H20V17" }, { r: "fade", d: 0.16 }],
  ],
});
