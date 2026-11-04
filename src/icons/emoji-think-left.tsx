import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "emoji-think-left" (MIT, Copyright (c) 2021 Luca Burgio).
export const EmojiThinkLeft = createIcon("EmojiThinkLeft", "emoji-think-left", {
  nodes: [
    ["path", { d: "M10 15H7M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" }],
    ["path", { d: "M8.5 8.5h.01" }, { r: "slide", x: -1, y: -1, a: 1, o: [8.5, 8.5] }],
    ["path", { d: "M15.5 8.5h.01" }, { r: "slide", x: -1, y: -1, a: 1, o: [15.5, 8.5] }],
  ],
});
