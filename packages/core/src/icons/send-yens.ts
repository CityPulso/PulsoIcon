import { icon } from "../icon.js";

// Adapted from Iconoir "send-yens" (MIT, Copyright (c) 2021 Luca Burgio).
export const SendYens = icon("SendYens", "send-yens", {
  nodes: [
    ["path", { d: "M13 12H21M21 12L17.16 8M21 12L17.16 16" }, { r: "slide", x: 1, y: 0, a: 2, o: [17, 12] }],
    ["path", { d: "M3 13H11" }, { r: "press", o: [7, 12.5] }],
    ["path", { d: "M3 7L7 12.5M11 7L7 12.5M7 12.5V18" }, { r: "press", o: [7, 12.5] }],
    ["path", { d: "M3 15H11" }, { r: "press", o: [7, 12.5] }],
  ],
});
