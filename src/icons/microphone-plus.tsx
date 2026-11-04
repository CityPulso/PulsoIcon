import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "microphone-plus" (MIT, Copyright (c) 2021 Luca Burgio).
export const MicrophonePlus = createIcon("MicrophonePlus", "microphone-plus", {
  nodes: [
    ["path", { d: "M16.9922 19H19.9922M22.9922 19H19.9922M19.9922 19V16M19.9922 19V22" }, { r: "pop", d: 0.1, o: [20, 19] }],
    ["rect", { x: "5", y: "2", width: "6", height: "12", rx: "3" }, { r: "pulse", a: 0.08, o: [8, 8] }],
    ["path", { d: "M1 10V11C1 14.866 4.13401 18 8 18V18V18C11.866 18 15 14.866 15 11V10" }],
    ["path", { d: "M8 18V22M8 22H5M8 22H11" }],
  ],
});
