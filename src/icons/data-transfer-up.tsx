import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "data-transfer-up" (MIT, Copyright (c) 2021 Luca Burgio).
export const DataTransferUp = createIcon("DataTransferUp", "data-transfer-up", {
  nodes: [
    ["path", { d: "M7 4L7 5" }, { r: "flicker", d: 0.2, o: [7, 4.5] }],
    ["path", { d: "M7 9L7 10" }, { r: "flicker", d: 0.1, o: [7, 9.5] }],
    ["path", { d: "M17 20V4M17 4L20 7M17 4L14 7" }, { r: "slide", y: -1, a: 2, o: [17, 12] }],
    ["path", { d: "M7 14V20M7 20L10 17M7 20L4 17" }],
  ],
});
