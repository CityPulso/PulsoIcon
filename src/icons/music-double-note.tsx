import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "music-double-note" (MIT, Copyright (c) 2021 Luca Burgio).
export const MusicDoubleNote = createIcon("MusicDoubleNote", "music-double-note", {
  nodes: [
    ["path", { d: "M20 14V3L9 5V16" }, { r: "draw" }],
    ["path", { d: "M17 19H18C19.1046 19 20 18.1046 20 17V14H17C15.8954 14 15 14.8954 15 16V17C15 18.1046 15.8954 19 17 19Z" }, { r: "bounce", d: 0.15, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M6 21H7C8.10457 21 9 20.1046 9 19V16H6C4.89543 16 4 16.8954 4 18V19C4 20.1046 4.89543 21 6 21Z" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1.5 }],
  ],
});
