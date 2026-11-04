import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "multi-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const MultiWindow = createIcon("MultiWindow", "multi-window", {
  nodes: [
    ["path", { d: "M7 19V11C7 9.89543 7.89543 9 9 9H20C21.1046 9 22 9.89543 22 11V19C22 20.1046 21.1046 21 20 21H9C7.89543 21 7 20.1046 7 19Z" }, { r: "slide", x: 1, y: 1, a: 1 }],
    ["path", { d: "M6.5 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4H15C16.1046 4 17 4.89543 17 6V9" }],
    ["path", { d: "M10 12H11" }, { r: "slide", x: 1, y: 1, a: 1 }],
    ["path", { d: "M5 7H6" }],
  ],
});
