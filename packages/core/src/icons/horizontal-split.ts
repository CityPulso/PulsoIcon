import { icon } from "../icon.js";

// Adapted from Iconoir "horizontal-split" (MIT, Copyright (c) 2021 Luca Burgio).
export const HorizontalSplit = icon("HorizontalSplit", "horizontal-split", {
  nodes: [
    ["path", { d: "M10 12H2M2 12L5.5 8.5M2 12L5.5 15.5" }, { r: "slide", x: -1, y: 0, a: 2 }],
    ["path", { d: "M14 12H22M22 12L18.5 8.5M22 12L18.5 15.5" }, { r: "slide", x: 1, y: 0, a: 2 }],
    ["path", { d: "M10 21L10 3" }],
    ["path", { d: "M14 21L14 3" }],
  ],
});
