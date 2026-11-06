import { icon } from "../icon.js";

// Adapted from Iconoir "data-transfer-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const DataTransferWarning = icon("DataTransferWarning", "data-transfer-warning", {
  nodes: [
    ["path", { d: "M7 4L7 5" }],
    ["path", { d: "M7 9L7 10" }],
    ["path", { d: "M17 12V4M17 4L20 7M17 4L14 7" }, { r: "slide", y: -1, a: 2, o: [17, 8] }],
    ["path", { d: "M20 16L20 18" }, { r: "pop", d: 0.1, o: [20, 17] }],
    ["path", { d: "M20 22.01L20.01 21.9989" }, { r: "pop", d: 0.25, o: [20, 22] }],
    ["path", { d: "M7 14V20M7 20L10 17M7 20L4 17" }],
  ],
});
