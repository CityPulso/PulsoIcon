import { icon } from "../icon.js";

// Adapted from Iconoir "warning-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const WarningWindow = icon("WarningWindow", "warning-window", {
  nodes: [
    ["path", { d: "M18 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V13" }],
    ["path", { d: "M2 7L22 7" }],
    ["path", { d: "M5 5.01L5.01 4.99889" }],
    ["path", { d: "M8 5.01L8.01 4.99889" }],
    ["path", { d: "M11 5.01L11.01 4.99889" }],
    ["path", { d: "M21 16L21 18" }, { r: "draw" }],
    ["path", { d: "M21 22.01L21.01 21.9989" }, { r: "pop", d: 0.2, o: [21, 22] }],
  ],
});
