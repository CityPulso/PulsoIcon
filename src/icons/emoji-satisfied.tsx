import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "emoji-satisfied" (MIT, Copyright (c) 2021 Luca Burgio).
export const EmojiSatisfied = createIcon("EmojiSatisfied", "emoji-satisfied", {
  nodes: [
    [
      "path",
      { d: "M10 9H8M16 9H14M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" },
      { r: "bounce", y: -1, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
  ],
});
