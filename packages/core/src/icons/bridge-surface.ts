import { icon } from "../icon.js";

// Adapted from Iconoir "bridge-surface" (MIT, Copyright (c) 2021 Luca Burgio).
export const BridgeSurface = icon("BridgeSurface", "bridge-surface", {
  nodes: [
    ["path", { d: "M3 12C3 16 5 21 11 21" }, { r: "draw" }],
    ["path", { d: "M10 6C10 10 12 15 18 15" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 8.5L3 6.5" }],
    ["path", { d: "M10 3L10 1" }],
    ["path", { d: "M3 12L10 6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M11 21L18 15" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M14.5 21H16.5" }],
    ["path", { d: "M21 15H23" }],
  ],
});
