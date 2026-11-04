import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "emoji-ball" (MIT, Copyright (c) 2021 Luca Burgio).
export const EmojiBall = createIcon("EmojiBall", "emoji-ball", {
  nodes: [
    [
      "path",
      { d: "M10 9H8M16 9H14M18 15H6M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" },
      { r: "wobble", a: 6, o: [12, 12] },
    ],
  ],
});
