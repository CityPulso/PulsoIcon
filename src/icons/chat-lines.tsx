import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "chat-lines" (MIT, Copyright (c) 2021 Luca Burgio).
export const ChatLines = createIcon("ChatLines", "chat-lines", {
  nodes: [
    ["path", { d: "M8 10L12 10L16 10" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M8 14L10 14L12 14" }, { r: "draw", d: 0.15 }],
    [
      "path",
      {
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z",
      },
    ],
  ],
});
