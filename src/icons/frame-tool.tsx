import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "frame-tool" (MIT, Copyright (c) 2021 Luca Burgio).
export const FrameTool = createIcon("FrameTool", "frame-tool", {
  nodes: [
    [
      "path",
      {
        d: "M2 7H3M2 17H3M21 7H22M21 17H22M17 3V2M7 3V2M17 22V21M7 22V21M18 6.6V17.4C18 17.7314 17.7314 18 17.4 18H6.6C6.26863 18 6 17.7314 6 17.4V6.6C6 6.26863 6.26863 6 6.6 6H17.4C17.7314 6 18 6.26863 18 6.6Z",
      },
      { r: "pulse", a: 0.08, o: [12, 12] },
    ],
  ],
});
