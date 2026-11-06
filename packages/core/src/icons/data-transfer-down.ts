import { icon } from "../icon.js";

// Adapted from Iconoir "data-transfer-down" (MIT, Copyright (c) 2021 Luca Burgio).
export const DataTransferDown = icon("DataTransferDown", "data-transfer-down", {
  nodes: [
    ["path", { d: "M17 20L17 19" }, { r: "flicker", d: 0.1, o: [17, 19.5] }],
    ["path", { d: "M17 15L17 14" }, { r: "flicker", d: 0.2, o: [17, 14.5] }],
    ["path", { d: "M7 4V20M7 20L4 17M7 20L10 17" }, { r: "slide", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M17 10V4M17 4L14 7M17 4L20 7" }],
  ],
});
