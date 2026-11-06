import { icon } from "../icon.js";

// Adapted from Iconoir "music-note-plus" (MIT, Copyright (c) 2021 Luca Burgio).
export const MusicNotePlus = icon("MusicNotePlus", "music-note-plus", {
  nodes: [
    ["path", { d: "M16 10H19M22 10H19M19 10V7M19 10V13" }, { r: "pop", o: [19, 10] }],
    [
      "path",
      { d: "M7 16V19C7 20.1046 6.10457 21 5 21H4C2.89543 21 2 20.1046 2 19V18C2 16.8954 2.89543 16 4 16H7ZM7 16V8M7 8V4L12 3V7L7 8Z" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5 },
    ],
  ],
});
