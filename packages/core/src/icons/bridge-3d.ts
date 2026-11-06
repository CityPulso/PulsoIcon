import { icon } from "../icon.js";

// Adapted from Iconoir "bridge-3d" (MIT, Copyright (c) 2021 Luca Burgio).
export const Bridge3d = icon("Bridge3d", "bridge-3d", {
  nodes: [
    ["path", { d: "M18 4L21 4" }],
    ["path", { d: "M10 20h.01" }, { r: "pop", d: 0.3, o: [10, 20] }],
    ["path", { d: "M14 4h.01" }, { r: "pop", d: 0.3, o: [14, 4] }],
    ["path", { d: "M10 20C10 20 16.5 17.5 12 12C7.5 6.5 14 4 14 4" }, { r: "draw" }],
    ["path", { d: "M3 20H6" }],
  ],
});
