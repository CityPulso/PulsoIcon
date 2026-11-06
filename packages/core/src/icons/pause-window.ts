import { icon } from "../icon.js";

// Adapted from Iconoir "pause-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const PauseWindow = icon("PauseWindow", "pause-window", {
  nodes: [
    ["path", { d: "M16 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V14" }],
    ["path", { d: "M19 17L19 22" }, { r: "blink", o: [19, 19.5] }],
    ["path", { d: "M22 17L22 22" }, { r: "blink", d: 0.05, o: [22, 19.5] }],
    ["path", { d: "M2 7L22 7" }],
    ["path", { d: "M5 5.01L5.01 4.99889" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M8 5.01L8.01 4.99889" }, { r: "pop", d: 0.08, o: [8, 5] }],
    ["path", { d: "M11 5.01L11.01 4.99889" }, { r: "pop", d: 0.16, o: [11, 5] }],
  ],
});
