import { icon } from "../icon.js";

// Adapted from Iconoir "horizontal-merge" (MIT, Copyright (c) 2021 Luca Burgio).
export const HorizontalMerge = icon("HorizontalMerge", "horizontal-merge", {
  nodes: [
    ["path", { d: "M22 12H14M14 12L17.5 8.5M14 12L17.5 15.5" }, { r: "slide", x: -1, y: 0, a: 2 }],
    ["path", { d: "M2 12H10M10 12L6.5 8.5M10 12L6.5 15.5" }, { r: "slide", x: 1, y: 0, a: 2 }],
    ["path", { d: "M10 21L10 3" }],
    ["path", { d: "M14 21L14 3" }],
  ],
});
