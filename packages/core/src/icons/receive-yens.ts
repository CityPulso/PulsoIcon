import { icon } from "../icon.js";

// Adapted from Iconoir "receive-yens" (MIT, Copyright (c) 2021 Luca Burgio).
export const ReceiveYens = icon("ReceiveYens", "receive-yens", {
  nodes: [
    ["path", { d: "M21 12H13M13 12L16.84 8M13 12L16.84 16" }, { r: "slide", x: -1, y: 0, a: 2, o: [17, 12] }],
    ["path", { d: "M3 13H11" }, { r: "press", d: 0.2, o: [7, 12.5] }],
    ["path", { d: "M3 7L7 12.5M11 7L7 12.5M7 12.5V18" }, { r: "press", d: 0.2, o: [7, 12.5] }],
    ["path", { d: "M3 15H11" }, { r: "press", d: 0.2, o: [7, 12.5] }],
  ],
});
