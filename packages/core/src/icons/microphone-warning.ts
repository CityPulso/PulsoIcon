import { icon } from "../icon.js";

// Adapted from Iconoir "microphone-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const MicrophoneWarning = icon("MicrophoneWarning", "microphone-warning", {
  nodes: [
    ["path", { d: "M21 14L21 18" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 22.01L21.01 21.9989" }, { r: "pop", d: 0.3, o: [21, 22] }],
    ["rect", { x: "7", y: "2", width: "6", height: "12", rx: "3" }, { r: "shake", a: 1, o: [10, 8] }],
    ["path", { d: "M3 10V11C3 14.866 6.13401 18 10 18V18V18C13.866 18 17 14.866 17 11V10" }],
    ["path", { d: "M10 18V22M10 22H7M10 22H13" }],
  ],
});
