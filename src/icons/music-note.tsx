import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "music-note" (MIT, Copyright (c) 2021 Luca Burgio).
export const MusicNote = createIcon("MusicNote", "music-note", {
  nodes: [
    [
      "path",
      { d: "M12 16V19C12 20.1046 11.1046 21 10 21H9C7.89543 21 7 20.1046 7 19V18C7 16.8954 7.89543 16 9 16H12ZM12 16V8M12 8V4L17 3V7L12 8Z" },
      { r: "bounce", x: 0, y: -1, a: 2 },
    ],
  ],
});
