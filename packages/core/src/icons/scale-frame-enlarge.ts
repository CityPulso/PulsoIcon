import { icon } from "../icon.js";

// Adapted from Iconoir "scale-frame-enlarge" (MIT, Copyright (c) 2021 Luca Burgio).
export const ScaleFrameEnlarge = icon("ScaleFrameEnlarge", "scale-frame-enlarge", {
  nodes: [
    ["path", { d: "M11 13.6V21H3.6C3.26863 21 3 20.7314 3 20.4V13H10.4C10.7314 13 11 13.2686 11 13.6Z" }, { r: "pulse", a: 0.12, o: [3, 21] }],
    ["path", { d: "M11 21H14" }],
    ["path", { d: "M3 13V10" }],
    ["path", { d: "M6 3H3.6C3.26863 3 3 3.26863 3 3.6V6" }],
    ["path", { d: "M14 3H10" }],
    ["path", { d: "M21 10V14" }],
    ["path", { d: "M18 3H20.4C20.7314 3 21 3.26863 21 3.6V6" }],
    ["path", { d: "M18 21H20.4C20.7314 21 21 20.7314 21 20.4V18" }],
    ["path", { d: "M11 10H14V13" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [12.5, 11.5] }],
  ],
});
