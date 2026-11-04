import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "antenna-signal-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const AntennaSignalTag = createIcon("AntennaSignalTag", "antenna-signal-tag", {
  nodes: [
    ["path", { d: "M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z" }],
    ["path", { d: "M15 9C15 9 16 10.125 16 12C16 13.875 15 15 15 15" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 12.01L12.01 11.9989" }, { r: "pop", o: [12, 12] }],
    ["path", { d: "M17 7C17 7 19 8.78571 19 12C19 15.2143 17 17 17 17" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9 9C9 9 8 10.125 8 12C8 13.875 9 15 9 15" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 7C7 7 5 8.78571 5 12C5 15.2143 7 17 7 17" }, { r: "draw", d: 0.2 }],
  ],
});
